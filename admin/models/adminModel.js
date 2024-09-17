const mongoose = require('mongoose')
const admin = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String
    },
});

module.exports = mongoose.model('admin',admin)