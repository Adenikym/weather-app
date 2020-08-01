const api={
    key:"c8e9f7c4c05b5ce22da8f644f8f4bb08",
    base:"https://api.openweathermap.org/data/2.5/"}

    const searchbox= document.querySelector(".search-box");
    searchbox.addEventListener("keypress", setQuery);
    
    function setQuery(evt) {
        if(evt.keyCode == 13) {
            getResults(searchbox.value);
            console.log(searchbox.value);
        }
    }
function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults)
    .catch( function (err) {
        document.getElementById("error").innerHTML=err.message="please enter valid city";

})

}

function displayResults (weather) {
    console.log(weather);

let city= document.querySelector('.location .city');
city.innerText= `${weather.name} , ${weather.sys.country}`

let temp= document.querySelector('.current .temp')
temp.innerHTML= `${Math.round(weather.main.temp)} <span>C</span>`

let weather_el= document.querySelector('.current .weather');
weather_el.innerText= weather.weather[0].main;
 
let hilow= document.querySelector('.hi-low');
hilow.innerText= `${weather.main.temp_min}C / ${weather.main.temp_max}C;`
}

    
    
    
