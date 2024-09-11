const mongoose=require("mongoose");
const plotschema = new mongoose.Schema({
    id:{
      type:Number  
    },
    title:{
type:String
    },
    price:{
        type:Number
    },
    address:{
type:String
    },
    image:{
     type:[String],
    required:true

    },

    city:{
type:String
    },
    description:{
type:String
    },
    size:{
type:Number
    },
    projecttype:{
type:String
    },
    status:{
type:String
    },
    owner:{
        type:String
            }
},{
    timestamps:true
})
module.exports=mongoose.model("plot",plotschema)