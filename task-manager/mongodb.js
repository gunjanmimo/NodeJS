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

    // db.collection('users').insertOne({
    //     name: "Mimo",
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("unable to insert data")
    //     }
    //     console.log(result.ops)

    // })
    db.collection('user').insertMany([
        {
            name: 'jen',
            age: 29
        }, {
            name: "Mokos",
            age: 20
        }
    ], (error, result) => {
        if (error) {
            return console.log("unable to insert document")
        }
        console.log(result.ops)
    })

})


