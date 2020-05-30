const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')


// weatherForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const location = search.value

//   messageOne.textContent = 'Loading...'
//   messageTwo.textContent = ''

//   fetch('http://localhost:3000?address=' + location).then((response) => {
//     console.log(response.json())
//     })
//   })

fetch('http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent('jaipur')+'&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric')
  .then((response)=>response.json())
  .then((data)=>{
    messageOne.textContent=(data.name)
    messageTwo.textContent=(data.main.temp)
    messageThree.textContent=(data.weather[0].main)
    messageFour.textContent=(data.main.humidity)
    messageFive.textContent=(data.wind.speed)
  })
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(location)+'&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric')
  .then((response)=>response.json())
  .then((data)=>{
    messageOne.textContent=(data.name)
    messageTwo.textContent=(data.main.temp)
    messageThree.textContent=(data.weather[0].main)
    messageFour.textContent=(data.main.humidity)
    messageFive.textContent=(data.wind.speed)
  })

})