const express=require('express')
const app=express()
const path=require('path')

/*app.set("view engine","hbs")

app.get('/getfile',(req,res)=>{
    //
    res.render('home')
})*/
app.set("view engine","pug")
app.get('/getfile',(req,res)=>{
    //
    res.render('contact')
})

app.listen(3001,()=>console.log('server started'))