const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    email:String,
    address:String,
    username:String,
    password:String
});

const userModel=mongoose.model('data',schema); //user is here collection 
module.exports=userModel;