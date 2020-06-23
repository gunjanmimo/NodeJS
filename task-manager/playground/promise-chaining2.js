require('../src/db/mangoose')
const Task = require("../src/models/tasks")


Task.findByIdAndRemove('5ee623603938377b57c90e88').then((task) => {
    console.log(task)
    return Task.countDocuments()
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})