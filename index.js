const express=require("express")
const mongoose=require("mongoose")
const port=5000
const app=express();
require("dotenv").config();
app.use(express.json)

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected Successfully"))
.catch((err)=>console.log("Error Running",err))


//Restaurant Schema

const name=mongoose.model(
    "name",
    new mongoose.Schema({
        type:String,
        required:true
    })
)

const location=mongoose.model(
    "location",
    new mongoose.Schema({
        type:String,
        required:true
    })
)

//Menu Item Schema

const dishname=mongoose.model(
    "dishname",
    new mongoose.Schema({
        type:String,
        required:true

    })
)

const cost=mongoose.model(
    "cost",
    new mongoose.Schema({
        type:Number,
        required:true
    })
)


app.listen(port,()=>console.log(`Successfully Running on http://localhost:{port}`))
