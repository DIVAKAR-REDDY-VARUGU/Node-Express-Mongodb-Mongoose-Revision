const fs=require('fs');


let path1="./file_read_writing/file1.txt"
let path2="./file_read_writing/file2.txt"

// Reading file content 
fs.readFile(path1,(err,data)=>{console.log((err)?err:data.toString());})


//  Writing content to file
let newData=" hello man this is new data dude !!!! "
fs.writeFile(path2,newData,(err)=>{console.log((err)?err:" data is written ")})

//  Appending content to file
let appendData=',| this data is appended newly'
fs.appendFile(path2,appendData,(err)=>{console.log((err)?err:" data is appended ")})