console.clear()
const express =require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')


const app=express();
const Port=5000;
//          mongoose connection ---------start 
const mongodb = "mongodb://127.0.0.1/edyoda";
const db=mongoose.createConnection(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('connection', ()=>{console.log("mongoose is connected with database")})
db.on('error',()=>{console.log("Something went wrong while connecting to database with mongoose ")})

//          Creating Schema model
const collection1 = db.model("collection1",
                    new mongoose.Schema({
                      name: String,
                      age: Number,
                      modifiedDate: { type: Date, default: Date.now() },
                      phoneNo: String,
                      description: String,
                      luckyNum: Number,
                    })
                  );

//  middle ware's
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())



//          creating promises
const fetchById=(id,collection)=>{
  return new Promise((resolve,reject)=>{
      collection.findById(id,(err,data)=>{
        if(err)reject(" Error while fetching data by Id ")
        else resolve(data)
      })
  })
}
const setById=(id,collection,newData)=>{
  return new Promise((resolve,reject)=>{
    collection.findByIdAndUpdate(id,newData,(err,data)=>{
      console.log(" we are in set by id call back ");
      if(err)reject(" Error while updating new data by Id ")
      else resolve(data)
    })
  })
}






app.post('/users',(req,res)=>{              //  CREATE 
    let obj=req.body;
    let newDocument=new collection1({
      name:obj.name,
      age:obj.age,
      phoneNo:obj.phoneNo,
      description:obj.description,
      luckyNum:obj.luckyNum
    });
    newDocument.save((err)=>{
      if(err)console.log("Error while saving the data in post method ")
      else res.send(" Document is saved ")
    })
})


app.get('/users',(req,res)=>{               // READ 
  collection1.find((err,data)=>{
    if(err)console.log(" Error while finding the users data in GET method");
    else res.send(data)
  })
})


app.post('/users/:id',(req,res)=>{            // UPDATE
  // console.log(req);
  let id=req.params.id
  let newObj =req.body

  fetchById(id,collection1)
  .then((data)=>{
    return setById(id,collection1,newObj)
  })
  .then((data)=>{
    return fetchById(id, collection1);
  })
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    console.log(" Error while updating the document in PUT method "+err);
  })
  
})


app.delete('/users/:id',(req,res)=>{         // DELETE 
    let id=req.params.id
    let body=req.body
    collection1.findByIdAndDelete(id,(err)=>{
      if(err)console.log(" somthing Error while Deleting data ");
      else res.send(id+" is deleted from database.... ");
    })
})


app.listen(Port,(err)=>{console.log((err)?"something went wrong ":" Server started on Port "+Port)})
