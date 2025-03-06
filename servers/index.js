const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const Usermodel = require("./models/user")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/User");
app.post('/register',(req,res)=>{
    Usermodel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json(err))
})
app.post('/Login',(req,res)=>{
    Usermodel.findOne(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json(err))
})
app.listen(3001,()=>
{
    console.log("server is running");
})