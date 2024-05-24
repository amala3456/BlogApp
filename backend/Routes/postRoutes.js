const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
const posts=require('../Model/post');
//middleware
router.use(express.json());
function verifytoken(req,res,next){
    const token=req.headers.token;
    try {
        if(!token) throw 'Unauthorized access';
    //extract payload
    let payload=jwt.verify(token,'reactapptoken')
    if(!payload) throw 'Unauthorized access';
    next()
    } catch (error) {
        res.status(404).send('Caught in error')
    }



}

router.post('/add',verifytoken,async(req,res)=>{
    try {
        const post=req.body;
        const data=await posts(post).save()
        res.status(200).send({message:"blog added"})
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
    
})
module.exports=router