console.log("conect to js file");
// fetch tabs
const userTab = document.querySelector("[data-yourWeather]");
const searchTab = document.querySelector("[data-userSearch]");

// fetch grandAccess Container
const grantAccess = document.getElementById("grant-access");
const grantAccessBtn = document.getElementById("grantAccessBtn");

// fetch form container
const searchForm = document.querySelector("[data-searchForm]");
const inputSearch = document.querySelector("#searchCity");

// fetch weather-container
const weatherContainer = document.querySelector("[data-userWeatherContainer]");

// initial need???
// https://openweathermap.org/api


let currentTab = userTab;
const API_KEY = "7ac1e97af7e6452372b4c4c507270359";
currentTab.classList.add("currentTab");
getFormSessionStorage();


// switching tab function

function switchedTab(clickedTab) {
     if (clickedTab != currentTab) {
          currentTab.classList.remove("currentTab");
          currentTab = clickedTab;
          currentTab.classList.add("currentTab");
          console.log(clickedTab);

          if (!searchForm.classList.contains("active")) {
               weatherContainer.classList.remove("acitve");
               grantAccess.classList.remove("active");
               searchForm.classList.add("active");
          } else {
               searchForm.classList.remove("active");
               weatherContainer.classList.remove("active");
               getFormSessionStorage();
          }
     }
}
// tab witch you want to select 
userTab.addEventListener("click", () => {
     switchedTab(userTab);
})

searchTab.addEventListener("click", () => {
     switchedTab(searchTab);
})

// get the coordinate in session storage
function getFormSessionStorage() {
     let localStorage = sessionStorage.getItem("user-coordinate");
     if (!localStorage) {
          grantAccess.classList.add("active");
     } else {
          let coordinate = JSON.parse(localStorage);
          fetchUserWeatherInfo(coordinate);
     }
}
// fetch the waether api this function is a sync function
async function fetchUserWeatherInfo(coordinate) {
     let { lat, lon } = coordinate;
     // remove the grantAccess container
     grantAccess.classList.remove("active");
     // screen loader show
     const loadingScreen = document.querySelector("[data-loading]");
     loadingScreen.classList.add("active");

     // API CALL
     try {
          let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
          let data = await response.json();
          randerWeatherInfo(data)
          loadingScreen.classList.remove("active");
          weatherContainer.classList.add("active");
     } catch (err) {
          loadingScreen.classList.remove("active");
     }

}

// update UI
function randerWeatherInfo(weatherInfo) {
     // console.log(weatherInfo?.name);
     const cityName = document.querySelector("[data-cityName]");
     const countryFlag = document.querySelector("[data-countryFlag]");
     const desc = document.querySelector("[data-description]");
     const dataIcon = document.querySelector("[data-icon]");
     const celsius = document.querySelector("[data-celsius]");
     const windSpeed = document.querySelector("[data-windspeed]");
     const humidity = document.querySelector("[data-humidity]");
     const cloud = document.querySelector("[data-cloud]");

     cityName.innerText = weatherInfo?.name
     countryFlag.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
     desc.innerText = weatherInfo?.weather[0]?.description;
     dataIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
     celsius.innerText = `${weatherInfo?.main?.temp} °C`;
     windSpeed.innerText = `${weatherInfo?.wind?.speed} M/S`;
     humidity.innerText = `${weatherInfo?.main?.humidity} %`;
     cloud.innerText = `${weatherInfo?.clouds?.all} %`;
}

function getLocation() {
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function showPosition(position) {
               console.log(position);
               let coordinate = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
               }
               sessionStorage.setItem("user-coordinate", JSON.stringify(coordinate));
               fetchUserWeatherInfo(coordinate);
          });
     } else {
          console.log("your browser is not support geolocation..")
     }
}
grantAccessBtn.addEventListener("click", getLocation);