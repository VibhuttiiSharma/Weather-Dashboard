const apiKey = "2f72260f8ba0b0303e35113e7872e9e5";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");

async function getWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;
        temperature.textContent = `🌡 Temperature: ${data.main.temp} °C`;
        humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
        wind.textContent = `🌬 Wind Speed: ${data.wind.speed} m/s`;
        condition.textContent = `☁ Condition: ${data.weather[0].main}`;

    } catch (error) {

        cityName.textContent = "Error";
        temperature.textContent = "";
        humidity.textContent = "";
        wind.textContent = "";
        condition.textContent = error.message;

    }

}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city !== "") {
        getWeather(city);
    }

});