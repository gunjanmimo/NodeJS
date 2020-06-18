const express = require("express")

const app = express()

const port = process.env.PORT || 3000


app.use(express.json())

app.post("/users",(req,res)=>{
    console.log(req.body)
    res.send("testing")
})


app.listen(port, () => {
    console.log("srver is runnning on port: ", port)
    console.log("http://localhost:"+port)
})