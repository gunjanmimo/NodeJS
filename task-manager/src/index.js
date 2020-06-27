const express = require("express")
require("./db/mangoose")
const User = require("./models/user")
const Task = require("./models/tasks")


const app = express()

const port = process.env.PORT || 3000


app.use(express.json())
//creating resources
app.post("/users", async (req, res) => {

    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)

    // })
})


app.get("/users", async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((user) => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get("/users/:id", (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})




app.post("/tasks", (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get("/tasks", (req, res) => {
    Task.find({}).then((task) => {
        res.send(task)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(400).send()
    })
})





app.listen(port, () => {
    console.log("server is running on port: ", port)
    console.log("http://localhost:" + port)
})