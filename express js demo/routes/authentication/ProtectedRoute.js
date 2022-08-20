const express=require('express')
const Router=express.Router()
const jwt=require("jsonwebtoken")
const asModel=require('../../models/AuthenticationModel')
const authorize=require("../../middlewares/authorize")
Router.get('/viewconfidential',authorize,async (req,res)=>{
try{
    console.log(req)
    const user=await asModel.findOne({username:req.username})
    if(user){
        res.send('you can view')
    }
}
catch(e){
    res.send('some error occured')
}
})
module.exports=Router