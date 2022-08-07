const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const cmModel=require('./models/ContactManagerModel')

server.post('/createuser',(req,res)=>{
const data=req.body
const userdata=new cmModel({
    fname:data.fname,
    phone:data.phone,
    email:data.email,
    address:data.address
})
userdata.save().then((result)=>res.send("created successfully")).catch((err)=>console.log(err))
/*cmModel.insert(data).then((result)=>res.send("created")).catch((Err)=>console.log(Err))*/
})



server.listen(3001,()=>console.log('server started'))