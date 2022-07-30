const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
//get method
server.get("/home",(req,res)=>{
   let search=req.query.search
   if(search==='india'){
    res.status(200).send("hello from india")
   }
   else{
    res.status(200).send("hello from server")
   }
})

server.get("/dashboard/:username",(req,res)=>{
    console.log(req.params.username)
    res.send(JSON.stringify({fname:'peter',email:"peter@gmail.com"}))
})

server.post("/signup",bp.json(),(req,res)=>{
    console.log(req.body)
    res.send("dummy")
})

server.post('/signin',(req,res)=>{
    console.log(req.body)
   if(req.body.username==="carry"&&req.body.password==="carry123"){
    res.send("you are authenticated")
   }
   else{
    res.send("you are not authenticated")
   }
})

server.all('*',(req,res)=>{
    res.status(404).send("file no found")
})

server.listen(3001,()=>{
    console.log("servr started at port no 3001")
})

