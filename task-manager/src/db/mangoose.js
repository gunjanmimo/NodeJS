const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be positive number")
            }
        }
    }
})

const me = new User({
    name: "Mike",
    age: -23,
    email: "gunjan@"
})



me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})


// const Task = mongoose.model('Task', {
//     taskName: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const myTask = new Task({
//     taskName: "OS STUDY",
//     completed: true
// })
// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log(error)
// })