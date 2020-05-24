const express = require("express")


const app = express()


//app.com
//app.com/help
//app.com/about

app.get('',(req, res)=>{
    res.send("hi i am using nodejs")
})

app.listen(3000,()=>{
    console.log("Server is running on port: 3000")
})