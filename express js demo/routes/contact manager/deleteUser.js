const express=require('express')
const Router=express.Router()
const cmModel=require('../models/ContactManagerModel')
Router.get('/deleteUser/:useremail',async (req,res)=>{
    const input =req.params.useremail
    try{
       const result= await cmModel.deleteOne({email:input})
       console.log(result)
       if(result.deletedCount>0){
        res.send("user deleted")
       }
       else{
        res.send('the user does not exists')
       }
    }
    catch(e){
        res.send('error')
    }
})
module.exports=Router