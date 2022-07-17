const http=require("http")
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
/*console.log(req.url)
res.end("hello from server")*/
if(req.url==="/view"){
    res.writeHead(200)
    res.end(JSON.stringify(data))
}
if(req.url==="/update"){
    res.writeHead(301)
    res.end("<h1>update is successful</h1>")
}
else{
    res.writeHead(404)
    res.end("Page not found")
}
})
server.listen(3001,()=>console.log("server started"))





