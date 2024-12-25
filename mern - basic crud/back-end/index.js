const express=require('express');
const mongoose=require('mongoose');

var cors=require('cors');
const app=express();

// router
const router = require('./routes/router');

// add schema
const students = require('./models/studSchema');

app.use(cors());
app.use(express.json());
app.use(router);


mongoose.connect("mongodb+srv://Jramoffi:Jram20030517@cluster0.yfxgi0a.mongodb.net/").then(()=>{
   console.log("connection done");
}).catch((err)=>{
    console.log(err)
});


app.listen(5000,()=>{
    console.log("Server connected..");
});

