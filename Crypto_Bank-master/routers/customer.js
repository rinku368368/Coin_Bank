const express = require('express');
const router = express.Router();

const Customer = require('../model/customer');

//@get
router.get("/", async (req,res) => {
    try{
        const customers = await Customer.find();
        res.json(customers);

    }catch(error){
        console.error(error.message);
        res.status(500).send("server error"+ error.message);
    }
});

router.get("/:customer_id", async (req, res) => {

    try {
        const customer = await Customer.findOne({_id:req.params.customer_id});
        
        if (!customer) {
            return res.status(400).json({msg: 'Profile not found.'});
        }
        res.send(customer);
        
    } catch (error) {
        console.error(error.type, error.message);
        if(error.kind === 'ObjectId') {
            return res.status(400).json({msg: 'customer not found.'});
        }

        res.status(500).send('server error');

    }
});

module.exports = router;
