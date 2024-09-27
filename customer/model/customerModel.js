const mongoose = require("mongoose");


const customerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    phone_no:{
        type:String
    },
    address:{
        type:String
    },
    date_Of_Appointment:{
         type:String
    },
    status: { 
        type: String, enum: ['active', 'inactive', 'suspended'], 
        default: 'active'
     },
     
    
},
{
    timestamps:true
 },

)

module.exports =mongoose.model('customer',customerSchema)