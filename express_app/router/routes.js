const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const router=express.Router()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

router.get('/about',(req,res,next)=>{
    res.send(" this is about page ")
})
router.get('/home',(req,res,next)=>{
    res.send(" this is home page ")
})
router.post('/home',(req,res,next)=>{
    res.send(" this is about page in post method  ")
})

module.exports = router