const express=require('express')
const Router=express.Router()
const cmModel=require('../models/ContactManagerModel')
Router.get('/finduser/:userid',async (req,res)=>{
    const input=req.params.userid
    try{
        const result=await cmModel.findById(input)
        res.send(result)
    }
    catch(e){
        res.send('some error occured')
    }
})
Router.get('/findbyname',async (req,res)=>{
    console.log(req.query.username)
    const input=req.query.username
    try{
        const result=await cmModel.find({fname:input})
        if(result.length!==0){
            res.send(result)
        }
        else{
            res.send('this user details does not exists')
        }
    }
    catch(e){
        res.send('error')
    }
    
})

module.exports=Router