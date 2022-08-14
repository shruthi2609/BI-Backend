const express=require('express')
const Router=express.Router()
const asModel=require('../../models/AuthenticationModel')
const bcrypt=require('bcrypt')
Router.post('/signup',async (req,res)=>{
    const data=req.body
    try{
        const hashedPassword=await bcrypt.hash(data.password,10)
        const userObj=new asModel({
            username:data.username,
            password:hashedPassword,
            email:data.email,
            phone:data.phone,
            address:data.address
        })
        const result=await userObj.save()
        console.log(result)
        res.send('created user')
    }
    catch(e){
        res.send('error')
    }
})
module.exports=Router
