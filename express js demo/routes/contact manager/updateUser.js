const express=require('express')
const Router=express.Router()
const cmModel=require("../models/ContactManagerModel")
Router.post('/updateAddress',async (req,res)=>{
const data=req.body
try{
    const result=await cmModel.findByIdAndUpdate(data.id,{address:data.newaddress})
    res.send('updated successfully')
}
catch(e){
    res.send('an error occured')
}
})
module.exports=Router
