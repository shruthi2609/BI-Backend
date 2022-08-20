const jwt=require("jsonwebtoken")
function authorize(req,res,next){
    try{
        const inputToken=req.headers['authorization']
        const token=inputToken.replace('Bearer ','')
        const result=jwt.verify(token,'jamesbond')
        req.username=result.username
        next()
    }
    catch(e){
        res.send("you are not authorized")
    }
}
module.exports=authorize