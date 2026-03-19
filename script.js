const apiKey = "63513ab115ca8cdffaf03c0bdd2a9df9"
const weatherdataEle = document.querySelector(".weather-data");
const citynameEle = document.querySelector("#city-name");
const formEle = document.querySelector("form");
const imgIcon = document.querySelector(".icon");
    formEle.addEventListener('submit',(e) => {
        e.preventDefault()
        // console.log(citynameEle.value)
        const cityValue = citynameEle.value
        getWeatherData(cityValue);
    })
    async function getWeatherData(cityValue){
         try{
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
            if(!response.ok){
                throw new Error('Network Response is not ok!')
            }
            const data = await response.json()    
            console.log(data);
            const temprature = Math.floor(data.main.temp);
            const details = [
                `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
                `Humidity: ${data.main.humidity}%`,
                `Wind-Speed : ${data.wind.speed}m/s`

                
            ]
            
            const description = data.weather[0].description
            const icon = data.weather[0].icon
            const wind = data.wind.speed
            weatherdataEle.querySelector('.temp').textContent = `${temprature}°C`
            weatherdataEle.querySelector('.desc').textContent = `${description}`
            
            imgIcon.innerHTML= `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`
            // weatherdataEle.querySelector(.icon).textContent = `${icon}`
            weatherdataEle.querySelector('.details').innerHTML = details.map((details)=>{
               return `<div>${details}</div>`
            }).join("")
         } catch(err){

         }
    }

