const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/DemoDB').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
const cm=mongoose.Schema
const cmSchema=new cm({
    fname:String,
    phone:Number,
    email:String,
    address:String
})
const cmModel=mongoose.model('contacts',cmSchema)
module.exports=cmModel
