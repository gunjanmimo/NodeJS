const express = require("express")
const hbs = require('hbs')
const path = require('path')
const chalk = require('chalk');
const request = require('request')
const weather = require("./weather.js")
const newsInfo= require("./news.js")
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
    if (!req.query.address) {
        return res.render('weather', {
            title: "Weather",
            discription: "Something Wrong with Weather service",

        })
    }
    weather.getTemp(req.query.address, (data) => {
        res.render('weather', {
            title: "Weather",
            location: req.query.address,
            temp: data,

        })
    })
})
app.get('/news',(req,res)=>{
    newsInfo.getNews((data)=>{
        res.render('news',{
            title: "News",
            author: data.author,
            newsTitle: data.title,
            description: data.description,
            urlToImage: data.urlToImage,
            publishedAt: data.publishedAt,
            content: data.content
        })
    })
    
})




app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        discription: "Something Wrong"
    })
})




console.log("To access: http://localhost:3000/")
app.listen(3000, () => {
    console.log(chalk.bold.blue("Server is running on port: 3000"))
})