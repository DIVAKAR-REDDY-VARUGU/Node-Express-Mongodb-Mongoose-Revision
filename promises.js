console.clear();
const fs=require('fs');



//******************************************************************************************************************************************************************* */
// simple example 
let a=20;
let promise=new Promise((resolve,reject)=>{
    if(a==20)resolve('a is '+a)
    else reject('a is not 20')
})


// promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})


//******************************************************************************************************************************************************************* */
//  Reading file , Appending new Data , Reading again
let path2='./file_read_writing/file2.txt'
let path1='./file_read_writing/file1.txt'
let newData="   THIS IS NEW DATA THAT GONNA APPEND TO PREVIOUS DATA .... !!!!! "
let fetch=(path,newData)=>new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
        if(err)reject(err)
        else{
            console.log(data.toString());
            fs.appendFile(path,newData,(err)=>{
                if(err)reject("somthing is wead in append function")
                else{
                    fs.readFile(path,(err,data)=>{(err)?reject(err):resolve(data.toString())})
                }
            })
        }
    })
});

// fetch(path2,newData).then((data)=>console.log(data)).catch((err)=>console.log(err))

// fetching data using Async await IIFE

(async(path,data)=>{
    console.log(await fetch(path,data))
})(path2,newData);


//******************************************************************************************************************************************************************* */

//  Example for promise chain       
let p1=(a)=>new Promise((res,rej)=>{
    if(a>9)res("given "+a+" is >=10")
    else rej(a+" is <= 9")
})

let p2=(a)=>new Promise((res,rej)=>{
    if(a%2==0)res(a+" is even number")
    else rej(a+" is odd number")
})

let p3=(a)=>new Promise((res,rej)=>{
    if(a==1)rej(a+" is not a prime nor composite")
    else if(a==2||a==3)res(a+" is a prime number")
    else {
        for(let i=2;i<a;i++){
            if(a%i==0)rej(a+" is not a prime number")
        }
    }
    res(a+' is a prime number')
})


//     - dont like this method 1
// p1(23).then((a) => {
//     console.log('1  '+a);
//     return p2(21);
// }).catch((err) => {
//     console.log("2  " + err);
//     return p2(21);
// }).then((a) => {
//     console.log('3  '+a);
//     return p3(23);
// }).catch((err) => {
//     console.log('4  '+err);
//     return p3(23);
// }).then((a) => {
//     console.log('5  '+a);
// }).catch((err) => {
//     console.log('6  '+err);
// });

//  using async await iife  -- best way method 2 
;(async()=>{
    try {
        console.log(await p1(2)+'async ');
    } catch (error) {
        console.log(error+" err async ");
    }

    try {
        console.log(await p2(21) + "async ");
    } catch (error) {
        console.log(error + " err async ");
    }
    
    try {
        console.log(await p3(23) + "async ");
    } catch (error) {
        console.log(error + " err async ");
    }
})();

//       -- best way method 3    i like it , but it works only if promises are independent to each other....
;(async ()=>{
    await (await Promise.allSettled([p1(2),p2(21),p3(23)])).forEach((i)=>{
        console.log((i.status=='fulfilled')?i.value:i.reason)
    })
})();
//*********************************** */



//******************************************************************************************************************************************************************* */


// if iife is not working keep ; before it - then it works
// ;((a) => {
//   console.log(a);
// })(20);