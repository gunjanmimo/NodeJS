require('../src/db/mangoose')
const Task = require("../src/models/tasks")


Task.findByIdAndRemove('5ee623603938377b57c90e88').then(() => {
    console.log("removed")
    return Task.countDocuments({ completed: false })
}).catch((e) => {
    console.log(e)
})