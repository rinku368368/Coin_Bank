const express = require('express');
const router = express.Router();;

const Transaction = require('../model/transaction');
const Customer = require('../model/customer');




router.post('/', async (req, res)=>{

    const {sender, receiver, amount} = req.body;
    try {
        const Sender = await Customer.findOne({name: sender});
        const Receiver = await Customer.findOne({name: receiver});
        
        var receiverBalance = parseFloat (Receiver.Balance);
        var senderBalance =parseFloat (Sender.Balance);
       
        if(amount === 0 || amount<0){
            res.send("Transfer Amount should be greater than 0");
        }else if(senderBalance >= amount){
            senderBalance =parseFloat (senderBalance) - parseFloat (amount);
            receiverBalance =parseFloat (receiverBalance) + parseFloat (amount);
           const newTransaction = new Transaction({
               sender, receiver, amount
           });
           const transaction = await newTransaction.save();
           Receiver.Balance = receiverBalance;
           Sender.Balance = senderBalance;
           await Sender.save();
           await Receiver.save();
            res.send(" Successfully Transfered!");
        }else{
            res.send('Insufficient Funds')
        }
        

    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error"+ error.message);
    }
});

router.get("/history", async (req,res)=>{

    try {
        const transactions = await Transaction.find();
        res.send(transactions);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error"+ error.message);
    }
});


module.exports = router;