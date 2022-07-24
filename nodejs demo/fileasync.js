const fs=require("fs")

//read file

fs.readFile("./file1.docx",'utf-8',(err,data)=>{
if(err){
    console.log(err)
}
else{
    console.log(data)
}
})

//write file

fs.writeFile("./file2.docx","this is from async",(err)=>{
    if(err){
        console.log(err)
    }
})

//appending
fs.appendFile("./file2.docx","this line is appended",(err)=>{
    console.log(err)
})

