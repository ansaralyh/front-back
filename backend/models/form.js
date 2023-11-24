const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
    },
    Message:{
        type:String
    }
});

module.exports = mongoose.model("form",formSchema)