const API_KEY = "02748df352b7374ef1457a1b4750ce53";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const weatherIconCode = data.weather[0].icon;
        const weatherIcon = document.createElement("img");
        weatherIcon.src=`./img/openweathermap-api-icons/icons/${weatherIconCode}.png`
        
        const temp=document.createElement("span");
        temp.innerText = `${data.main.temp}`;
        temp.classList.add("temperature");
        weather.appendChild(temp);
        weather.appendChild(weatherIcon);
        weather.classList.add("move");
        weatherIcon.classList.add("size");

        const city_span = document.createElement("span");
        city_span.classList.add("city");
        city_span.innerText = `${data.name}`;
        city.appendChild(city_span);
    });
}

function onGeoerr() {
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoerr);