const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
     },
    Balance:{
        type: Number

    }

});

module.exports = Customer = mongoose.model('customer', userSchema);