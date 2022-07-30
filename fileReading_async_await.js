const fs=require('fs')
const util=require('util')
console.clear();
const readFile=async(path)=>{
    try {
        const data1 =await util.promisify(fs.readFile)(path,'utf8');
        console.log("this is working ");
        console.log(data1)
    }catch(err){
        console.log(err);
        console.log("this is not working ");
    }
}
readFile('./file1.txt')
// console.log("hello");