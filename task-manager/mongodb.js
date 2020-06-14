//crud= reate read update delete



const { MongoClient, ObjectID } = require("mongodb")


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to conncect to database')
    }

    const db = client.db(databaseName)


    // db.collection('task').findOne({ _id: new ObjectID("5ee0a00d2a46e6e15b389f9a") }, (error, user) => {
    //     if (error) {
    //         return console.log("unable to fetch")
    //     }
    //     console.log(user)
    // })
    // db.collection('task').find({ completed: false }).toArray((error, task) => {
    //     if (error) {
    //         return console.log("no data found")
    //     }
    //     console.log(task)
    // })


    //update

    // const updatePromise = db.collection('user').updateOne({
    //     _id: new ObjectID("5ee095563f6e4eabfcea5044")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    // const updateProise = db.collection('task').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete
    // const deletePromise = db.collection('user').deleteOne({
    //     age: 23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    const deletePromise = db.collection("taks").deleteOne({
        taskName: "IT study"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })




})


