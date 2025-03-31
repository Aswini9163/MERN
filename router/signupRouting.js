let express = require('express');
let Signup = require("../model/signupModel");
let jwt = require('jsonwebtoken');
const LoginMiddleware = require('./LoginMiddleware');

let signupRouting = express.Router();

signupRouting.post('/signup',async (req,res)=>{
   try{
   let signup= new Signup(req.body);
   let results= await signup.save();
   res.send(results);
   }
   catch(err){
    res.send('Error:',err);
   }
})
signupRouting.post('/login',async (req,res)=>{
   const {email,password}=req.body;
   let exists = await Signup.findOne({email:email});
  
          if(!exists){
             res.send("Nouser");
             }
             else if(exists.password!==password){
                  res.send("Invalid");
                  }
                  else{
                   // res.send("Valid");
                     let payload = {
                        user:{
                           id:exists._id,
                        },
                     };

                  jwt.sign(payload, "JSONString123",{expiresIn:36000},(err,token)=>{
                     if (err) throw err;
                     res.send({token});
                   })
                     };
                     })

   

signupRouting.get("/admindashboard",LoginMiddleware,(req,res)=>{
   res.send("Admin");
})





module.exports=signupRouting;