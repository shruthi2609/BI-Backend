const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/DemoDB').then((res)=>console.log('connected to db')).catch((err)=>console.log('err in connection'))
//model
const schema=mongoose.Schema
const userSchema=new schema({
    username:String,
    age:Number,
    country:String
})
const userModel=mongoose.model('demo',userSchema)
//aggregations - gt lt gte lte ne in
/*const data1=new userModel({
    username:'CARRY',
    age:30,
    country:'IND'
   
    
})
data1.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))
const data2=new userModel({
    username:'koushik',
    age:10,
    country:'IND'
    
})
data2.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))

userModel.find({username:'helen',age:21}).then((res)=>console.log(res)).catch((e)=>console.log(e))

userModel.find({$and:[{"username":'helen'},{"country":'US'}]}).then((res)=>console.log(res)).catch((e)=>console.log(e))
userModel.find({age:{$gte:20}}).then((res)=>console.log(res)).catch((e)=>console.log(e))
userModel.find({$or:[{"username":'helen'},{"country":'US'},{"age":{$gte:20}}]}).then((res)=>console.log(res)).catch((e)=>console.log(e))

userModel.find({country:{$in:['IND','UK']}}).then((res)=>console.log(res)).catch((e)=>console.log(e))
userModel.find({country:{$in:['IND','UK']}}).count().then((res)=>console.log(res)).catch((e)=>console.log(e))
userModel.find({country:{$in:['IND','UK']}}).sort({username:1}).then((res)=>console.log(res)).catch((e)=>console.log(e)) -> ascending
userModel.find({country:{$in:['IND','UK']}}).sort({username:-1}).then((res)=>console.log(res)).catch((e)=>console.log(e)) -> descending
userModel.find({country:"IND"},{country:0}).then((res)=>console.log(res)).catch((e)=>console.log(e))
*/
//crud - creation reading update and delete
//insert mongoose
/*const data1=new userModel({
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

const data4=new userModel({
    username:'carry',
    password:'carry1234',
    role:'trainee',
    
})
data4.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))
//Read -> find findOne findById
userModel.find({username:'carry',role:'admin'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
userModel.findById('62efb7cf93b6af1a8f128be2').then((res)=>console.log(res)).catch((err)=>console.log(err))*/


//update -> updateOne updateMany findByIdAndUpdate
/*userModel.updateOne({username:'helen'},{role:'HR Manager',password:'manager123'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
userModel.updateMany({username:'carry'},{role:'tech lead',password:'manager123'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
userModel.findByIdAndUpdate('62efb7cf93b6af1a8f128be2',{username:'helen mary'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
//delete
userModel.findByIdAndDelete('62efb7cf93b6af1a8f128be2').then((res)=>console.log(res)).catch((err)=>console.log(err))
userModel.deleteOne({username:'karan'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
userModel.deleteOne({username:'carry'}).then((res)=>console.log(res)).catch((err)=>console.log(err))
const data3=new userModel({
    username:'carry',
    password:'carry@123',
    role:'admin',
    
})
data3.save().then((res)=>console.log("data is inserted")).catch((Err)=>console.log('insert failed'))
userModel.deleteMany({username:'carry'}).then((res)=>console.log(res)).catch((err)=>console.log(err))*/








