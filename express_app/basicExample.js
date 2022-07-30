const express = require('express')
const bodyParser = require('body-parser')
const app=express()
const port=3000

console.clear();

//  Middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



//  all responces

const hello=(req,res,next)=>{
    res.send('Hello Divakar Reddy')
}
const details=(req,res,next)=>{
    console.log(req.params.name);
    res.send(req.params.name)
}
const loginDetails=(req,res,next)=>{
    let data=req.body;
    data.id='20191CSE0669'
    res.send(data)
}

const error=(err)=>{
    if(err)console.log('Something went wrong while connecting dude !!!');
    else console.log('Server is listening at port '+port);
}


//  all methods 
app.get('/',hello)
app.get('/:name',details)
app.post('/',loginDetails)






app.listen(port,error)

