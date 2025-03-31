let express = require('express');
let Doctor = require("../model/doctorModel");


let doctorRouting = express.Router();

doctorRouting.post("/doctor", async(req,res)=>{
   try{
    let doctor = new Doctor(req.body);
    let result = await doctor.save();
    res.send(result);
   }
   catch(err){
      console.log(err);
   }
})

doctorRouting.get("/doctor/:treatname",async(req,res)=>{
   try{
   let doctor = await Doctor.find({tname:req.params.treatname});
   res.send(doctor);
   }
   catch(err){
      res.send(err);
   }
})

module.exports=doctorRouting;