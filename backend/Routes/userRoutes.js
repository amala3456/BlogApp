const express=require('express');
const router=express.Router();
const users=require('../Model/user');
const jwt=require('jsonwebtoken');
//middleware
router.use(express.json());
//to create signup route
router.post('/',async(req,res)=>{
    try {
        const data=req.body;
     let newUser = await users(data).save();
     console.log(newUser);
     res.status(200).send({message:"data added"})
        
    } catch (error) {
        console.log(error);
    }
})
//login route

router.post('/login',async(req,res)=>{
  
let username=req.body.username;
let password=req.body.password;
const user=await users.findOne({username:username})
if(!user){
    res.json({message:"user not found"})
}

try {
    if(user.password==password){
        let payload={user:"username",pwd:"password"}
        let token=jwt.sign(payload,'reactapptoken')
        //here reactapptoken is the secret
        // res.json({message:"login successfull",user})
        res.send({message:'login successfull',token:token})
        //above data will be send to frontend
    }
    
} catch (error) {
    console.log(error.message);
}
 
})

module.exports=router