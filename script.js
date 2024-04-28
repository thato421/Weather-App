// Javascript File

const apiKey = "5d99b263be45eb6490b53f1cfd99a7e6";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search_container input");

const searchBtn = document.querySelector(".search_container button");

const weatherIcon = document.querySelector(".weather_icon_img");

async function checkWeather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data = await response.json();

    document.querySelector(".city_name").textContent = data.name;

    document.querySelector(".temperature").textContent = data.main.temp + `°C`;

    document.querySelector(".humidity").textContent = data.main.humidity + `%`;

    document.querySelector(".wind").textContent = data.wind.speed + ` Km/h`;

    if(data.weather[0].main == "Clouds" ){

        weatherIcon.src = "./icons/CLOUDY.svg";

    }

    else if(data.weather [0].main == "Clear"){

    weatherIcon.src = "./icons/SUN.svg";

    }

    else if(data.weather [0].main == "Rain"){

        weatherIcon.src = "./icons/STORM.svg";

    }

    else if(data.weather [0].main == "Drizzle"){

        weatherIcon.src = "./icons/DRIZZLE.svg";

    }

    else if(data.weather [0].main == "Mist"){

        weatherIcon.src = "./icons/MIST.svg";

    }

    else if(data.weather [0].main == "Snow"){

        weatherIcon.src = "./icons/SNOW.svg";

    }

    console.log(data);
}

checkWeather("polokwane");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
});
