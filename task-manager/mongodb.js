//crud= reate read update delete

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const objectID= mongodb.ObjectID

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


    db.collection('task').findOne({ _id: new ObjectID("5ee0a00d2a46e6e15b389f9a") }, (error, user) => {
        if (error) {
            return console.log("unable to fetch")
        }
        console.log(user)
    })
    db.collection('task').find({ completed: false }).toArray((error, task) => {
        if (error) {
            return console.log("no data found")
        }
        console.log(task)
    })
    // db.collection('user').find({ age: 20 }).count((error, user) => {
    //     console.log(user)
    // })



})


