require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())



app.use('/api/product',productRoute);



//ROUTE
app.get('/',(req,res)=>{
    throw new Error('fake error')
})

app.get('/test',(req,res)=>{
    res.send("THIS IS TEST API")
    console.log("HELLO THIS IS NODE API GET METHOD")
})

app.use(errorMiddleware)

mongoose
.connect(MONGO_URL)
.then(()=>{
    console.log("CONNECTED MONGODB")
    app.listen(PORT , ()=>{
        console.log("NODE JS API RUNNING IN PORT 3000")
    })
    
})
.catch((error)=>{
    console.log(error)
})