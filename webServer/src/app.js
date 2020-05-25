const path = require("path")
const express = require("express")
const hbs = require('hbs')




const app = express()

// define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath= path.join(__dirname,'../templates/partials')
app.set('view engine', 'hbs')
app.set("views", viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather app",
        name: "gunjan paul",
        location: "jaipur"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Weather app"
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: "help section",
        owner: "gunjan paul"
    })
})
app.listen(3000, () => {
    console.log("Server is running on port: 3000")
})