let express = require('express');
let User = require("../model/userModel");

let userRouting = express.Router();

userRouting.get("/user",async (req,res)=>{
   // res.send("User Data")
   let user =await User.find();
   res.send(user);
})

userRouting.post("/user",async (req,res)=>{
   // res.send("Add User Data")
   let user = new User(req.body);
   let result =await user.save();
   res.send(result);

})
userRouting.get("/user/:sid",async (req,res)=>{
    // res.send("User Data")
    let user =await User.findOne({_id:req.params.sid});
    res.send(user);
 })
userRouting.put("/user/:sid",async (req,res)=>{
   // res.send("Edit User Data")
   let user = await User.updateOne({_id:req.params.sid},{$set: req.body})
   res.send(user);
})

userRouting.delete("/user/:sid",async (req,res)=>{
    //res.send("Delete User Data")
    let user=await User.deleteOne({_id:req.params.sid})
    res.send(user);

})

module.exports=userRouting;