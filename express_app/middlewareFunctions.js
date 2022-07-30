console.clear();
const express=require('express')
const router=require('./router/routes.js')//             --- this is for router level middleware 
const bodyParser=require('body-parser')

const app=express()
const port=3000


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(router)//           --- this is for router level middleware 

//                                           Application level middlewares

// app.use((req,res,next)=>{
//     res.send(' this is application level middle ware without and mount point ')
//     next()
// })

// **** One request can send only one res.send response

const middleware1 = (req, res, next) => {
    req.m1="came to middle ware 1 dude !!!! "     // you can send data to next middle ware by adding a property to an object 
    next();
  // return next()    you can use this line also insted only next() ' but difference is you can't execute anything after return function " remember !!! "
};
const middleware2 = (req, res, next) => {
    req.m2=req.m1+"  came to middle ware 2 also dude !!! "
    next();
};

// app.use('/',middleware1)
// app.use('/',middleware2)

// app.get('/', (req,res,next)=>{
//     res.send(req.m2);
//     console.log(" get / "+req.m2);
// })

//                                  OR 

let middlewareGroup=[middleware1,middleware2]
app.get('/',middlewareGroup,(req,res,next)=>{
    res.send(req.m2+" and now in get / mount point man !!! ");
})



app.post("/1", (req, res, next) => {
    if(req.body.id==0)next('route')     // this will pass to next method with same mount point 
    else res.send(" this is post method of `/` mount point ");
});
app.post("/1", (req, res, next) => {
    res.send(" your id is 0 rt !!!  ");
});




app.listen(port,(err)=>{
    if(err)console.log("somthing went wrong dude!!! ")
    else console.log("server is listening at port "+port);
})