const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    sender:{
        type: String,
        required: true,
       
    },
    receiver:{
        type: String,
        required: true,
     },
    amount:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Transaction = mongoose.model('transaction', transactionSchema);