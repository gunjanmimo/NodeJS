require('../src/db/mangoose')
const User = require("../src/models/user")

//5ee9c5738275dddfdc0a6bab

User.findByIdAndUpdate('5ee9c5738275dddfdc0a6bab', {
    age: 98
}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

const updateAgeAndCount = async (id, age) => {
    const user = User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({})
    return count
}

updateAgeAndCount('5ee9c5738275dddfdc0a6bab', 2).then((reult) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})