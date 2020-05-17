const request = require("request")

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Jaipur&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric'
request({ url: url, json: true }, (err, response) => {
  if(err){
    console.log("Enable to connect weather service")
  } else if(response.body.cod==404){
    console.log(response.body.message)
  }
  else{
    const data=response.body;
    console.log(data.main.temp+" C")
  }

})

