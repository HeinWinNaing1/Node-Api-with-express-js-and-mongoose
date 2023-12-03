const express = require('express')
const app = express()

//ROUTE
app.get('/',(req,res)=>{
    res.send("HELLO WEB PAGE")
    console.log("HELLO THIS IS NODE API GET METHOD")
})

app.listen(3000 , ()=>{
    console.log("NODE JS API RUNNING IN PORT 3000")
})