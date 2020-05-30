const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(location)+'&&lang=es&appid=a005b7cecf27b814bdc36b3d86d01f63&units=metric').then(
        (response) => {
            response.json().then((data)=>{
                if(data.error){
                    messageOne.textContent = data.error
                }
                else {
                    console.log(data)
                    messageOne.textContent = search.value
                    messageTwo.textContent = data.main.temp
                        }
            })
        }
    )

})