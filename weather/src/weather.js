const request = require('request')

//const url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric'


exports.getTemp=(address,callback)=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(address)+'&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric'
    setTimeout(()=>{
        request({ url: url, json: true }, (err, response) => {
            if(err){
              callback("Enable to connect weather service")
            } else if(response.body.cod==404){
              callback(response.body.message)
            }
            else{
              const data=response.body;
              callback({
                location:address,
                temp: data.main.temp,
                condition: data.weather[0].main,
                humidity:data.main.humidity,
                windSpeed: data.wind.speed,
              })
            }
          
          })
    },200)
}

// getTemp('jaipur',(data)=>{
//     console.log(data)
// })