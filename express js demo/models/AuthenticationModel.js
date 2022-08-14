const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/DemoDB').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
const as=mongoose.Schema
const asSchema=new as({
    username:String,
    password:String,
    phone:Number,
    email:String,
    address:String
})
const asModel=mongoose.model('Authentication',asSchema)
module.exports=asModel
