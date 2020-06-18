const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("srver is runnning on port: ", port)
    console.log("localhost:", port)
})