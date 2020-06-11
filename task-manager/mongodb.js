//crud= reate read update delete

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to conncect to database')
    }

    const db = client.db(databaseName)

    db.collection('task').insertMany([
        {
            taskName: "IT study",
            completed: true
        }, {
            taskName: "study nodejs",
            completed: false
        }, {
            taskName: "sending mail",
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log("unable to insert docuent")
        }
        console.log(result.ops)
    })

})


