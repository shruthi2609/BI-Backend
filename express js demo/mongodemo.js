const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/DemoDB').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
//model
const schema=mongoose.Schema
const userSchema=new schema({
    username:String,
    password:String,
    role:String,
    age:Number
})
const userModel=mongoose.model('userDetails',userSchema)

//insert mongoose
const data1=new userModel({
    username:'helen',
    password:'helen@123',
    role:'admin',
    
})
data1.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))
const data2=new userModel({
    username:'karan',
    password:'karan@123',
    role:'admin',
    
})
data2.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))


