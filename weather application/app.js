const request = require("request")

const url = 'http://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=a005b7cecf27b814bdc36b3d86d01f63'
request({ url: url }, (err, response) => {
  const data=JSON.parse(response.body)
  console.log(data.main.temp)
})