let mongoose = require('mongoose');


let appointmentSchema = new mongoose.Schema({
    tname:{
        type:String,
        required:true
    },
    dname:{
        type:String,
        required:true,
    },
    pname:{
        type:String,
        required:true
    },
    bdate:{
        type:Date,
        required:true,
    },
    btime:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true,
    },
    status1:{
        type:String,
        required:false,
    },
    message:{
        type:String,
        required:true
    },
    

})

module.exports=mongoose.model("appointment",appointmentSchema);