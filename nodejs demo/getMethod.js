const http=require("http")
const url=require('url')
const data=[
    {
    "username":"john",
    "age":20,
    "email":"john@gmail.com"
    },
    {
    "username":"peter",
    "age":22,
    "email":"peter@gmail.com"
    }
    ]
const server=http.createServer((req,res)=>{
const parsedURL=url.parse(req.url,true)
const querydatauname=parsedURL.query.username
const querydataemail=parsedURL.query.email


if(parsedURL.pathname==="/viewUser"&&req.method==='GET'){
    const result=data.find((item)=>item.username===querydatauname&&item.email===querydataemail)
    if(result){
        res.writeHead(200)
    res.end(JSON.stringify(result))
    }
    else{
        res.writeHead(200)
    res.end(JSON.stringify({msg:"no data found"}))
    }
    
}
if(parsedURL.pathname==='/createUser'&&req.method==='POST'){
   let reqdata=''
   req.on('data',(chunk)=>{
    reqdata+=chunk.toString()
   })
   req.on('end',()=>{
    data.push(JSON.parse(reqdata))
    console.log(data)
   })
   req.on('close',()=>{
    console.log("close")
   })
   res.end("successfully created")
}
else{
    res.writeHead(404)
    res.end("Page not found")
}
})
server.listen(3001,()=>console.log("server started"))





