//Weather app

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "Use your own API key, you can get it for free on OpenWeather's website after creating an account!";

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();//To avoid the page to refresh.

    const city = cityInput.value;
    //error catching.
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);

        }
    }
    else{
        displayError("Please enter a city");
    }


});

//functions: 

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    
    if(!response.ok){
        throw new Error("Could not fetch weather data.");
    }
    else{
        return await response.json();

    }



}

function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, humidity}, 
           weather:[{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    //Creation of our elements.
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const deskDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    //assigning the fetched data.
    cityDisplay.textContent = city;
    tempDisplay.textContent=`${(temp- 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity :${humidity}%`;
    deskDisplay.textContent= description;
    weatherEmoji.textContent =getWeatherEmoji(id);
    //applying our predefined css styling
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    deskDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    //appending our elements to the card.
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(deskDisplay);
    card.appendChild(weatherEmoji);


}
//will be defined in function of the weather iD
function getWeatherEmoji(weatherId){
//Using switch to return the appropriate emoji in function of the weather Id.
    switch(true){
        case(weatherId>= 200 && weatherId<300):
            return "⛈️";
        case(weatherId>= 300 && weatherId<400):
            return "🌧️";
        case(weatherId>= 500 && weatherId<600):
            return "☔️";
        case(weatherId>= 600 && weatherId<700):
            return "❄️";
        case(weatherId>= 700 && weatherId<800):
            return "🌫️";
        case(weatherId===800||weatherId===801):
            return"☀️";
        case(weatherId>801&&weatherId<810):
            return"☁️";
        default :
            return "🤷";
        
        
    }

}

function displayError(message){

    const errorDisplay=document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display="flex";
    card.appendChild(errorDisplay);


}