const weather = document.querySelector(".js-weather");

const API_KEY = "a13c5818f661804ed7b3bb821dbd2c8b";
const COORDINDATES = "coordinates";



function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const location = json.name;
            console.log(temperature,location);
            weather.innerText =`${temperature}°C @ ${location}`;
        });

}

function savePosition(coordsObj){
    localStorage.setItem(COORDINDATES,JSON.stringify(coordsObj));
}

function handleError(){
    console.log("Your position cannot be found.");
}

function handleSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }

    savePosition(coordsObj);
    getWeather(latitude,longitude);
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess,handleError);
}

function loadCoords(){
    const loaded = localStorage.getItem(COORDINDATES);

    if(loaded === null){
        askCoords();
    }else{
        const parsedCoords = JSON.parse(loaded);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);

    }
}

function init(){
    loadCoords();

}
init();