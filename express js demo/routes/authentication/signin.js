const express=require('express')
const Router=express.Router()
const asModel=require('../../models/AuthenticationModel')
const bcrypt=require('bcrypt')
Router.post('/signin',async (req,res)=>{
    const data=req.body//data.password -> plaintext password
   try{
    const result=await asModel.findOne({username:data.username})//hashed password
    const authenticate=await bcrypt.compare(data.password,result.password)
    console.log(authenticate)
    if(authenticate){
        res.send("you are authenticated")
    }
    else{
        res.send('invalid')
    }
  
   }
   catch(e){
    res.send('err')
   }
       
})
module.exports=Router
