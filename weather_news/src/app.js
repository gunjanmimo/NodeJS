const express = require("express")
const hbs = require('hbs')
const path = require('path')
const chalk = require('chalk');
const app = express()

// path declearation 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather&News",
        discription: 'Your weather & News'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        discription: "Devloper is Rocking"
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact",
        discription: "Email: gunjan.mtbpaul@gmail.com"
    })
})

app.get('/weather', (req, res) => {
    res.render('weather', {
        title: "Weather",
        discription: "Current Weather ",
        
    })
})
console.log("To access: http://localhost:3000/")
app.listen(3000, () => {
    console.log(chalk.bold.blue("Server is running on port: 3000"))
})