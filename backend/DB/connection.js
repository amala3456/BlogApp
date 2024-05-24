const mongoose=require('mongoose');


mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err);
})
