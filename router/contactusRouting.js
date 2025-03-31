let express = require('express');
let nodemailer = require('nodemailer');

let contactusRouting = express.Router();

contactusRouting.post("/contactus",async(req,res)=>{
   const {name,phone,email,subject,message} =req.body;
   try{
   let transport = nodemailer.createTransport({
      service:"gmail",
      auth:{
         user:"aswini.mamidala@gmail.com",
         pass:"twqo adar xzvt snym"
         }
         });
         let mailOptions = {
            from: "aswini.mamidala@gmail.com",
            to: "aswini.mamidala3@gmail.com",
            subject: "Contact Us",
            text: `
            hi
            name:${name},
            phone:${phone},
            email:${email},
            subject:${subject},
            message:${message}
            `
         }
         transport.sendMail(mailOptions,(err, info)=>{
            if(err) throw err;
            //console.log("mail sent succ...");
            res.send("Mail sent succ...")
         })



   }
   catch(err){
      res.send(err);
   }
})
/*treatmentRouting.get("/treatment",async(req,res)=>{
   try{
   let treatment = await Treatment.find();
   res.send(treatment);
   }
   catch(err){
      res.send(err);
   }
})

treatmentRouting.get("/treatment/:treatname",async(req,res)=>{
   try{
   let treatment = await Treatment.findOne({tname:req.params.treatname});
   res.send(treatment);
   }
   catch(err){
      res.send(err);
   }
})

treatmentRouting.delete("/treatment/:tid",async(req,res)=>{
   try{
   let treatment = await Treatment.deleteOne({_id:req.params.tid});
   res.send(treatment);
   }
   catch(err){
      res.send(err);
   }
})

treatmentRouting.put("/treatment/:treatname",async(req,res)=>{
   try{
   let treatment = await Treatment.updateOne({tname:req.params.treatname},{$set:req.body});
   res.send(treatment);
   }
   catch(err){
      res.send(err);
   }
})*/


module.exports=contactusRouting;