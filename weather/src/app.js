const express = require('express')
const path = require('path')
const hbs = require('hbs')
const weather = require('./weather.js')
const app = express()
const port = process.env.PORT || 3000

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
    if (!req.query.address) {
        return res.render('index', {
            title: "Weather",
            discription: "Something Wrong with Weather service",

        })
    }
    weather.getTemp(req.query.address, (data) => {
        res.render('index', {
            title: "Weather",
            location: data.location,
            temp: data.temp+ " C",
            condition: data.condition,
            humidity: data.humidity,
            windSpeed: data.windSpeed


        })
    })
})



app.get('*', (req, res) => {
    res.render('error', {
        title: "404",
        discription: "Something Wrong"
    })
})





app.listen(port, () => {
    console.log("http://localhost:"+port)
})