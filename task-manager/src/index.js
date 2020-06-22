const express = require("express")
require("./db/mangoose")
const User = require("./models/user")
const Task = require("./models/tasks")


const app = express()

const port = process.env.PORT || 3000


app.use(express.json())
//creating resounces
app.post("/users", (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)

    })
})


app.get("/users", (res, req) => {
    User.find({})
})






app.post("/tasks", (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log("srver is runnning on port: ", port)
    console.log("http://localhost:" + port)
})