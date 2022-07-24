const fs=require("fs")
//file read - sync
console.log(fs.readFileSync("./file1.docx",'utf-8'))

//write - sync
const newdata='getting started with node js'
fs.writeFileSync("./file2.docx",newdata)

//append - sync
fs.appendFileSync("./file2.docx",`\n this is an appended data`)



