console.log("conect to js file");
// fetch tabs
const userTab = document.querySelector("[data-yourWeather]");
const searchTab = document.querySelector("[data-searchCity]");

// fetch grandAccess Container
const grantAccess = document.getElementById("grant-access");
const grantAccessBtn = document.getElementById("grantAccessBtn");

// fetch form container
const searchForm = document.querySelector("[searchForm]");
const inputSearch = document.querySelector("[inputSearch]");

// fetch weather-container
const weatherContainer = document.getElementsByClassName("weather-container");
const locationName = document.getElementsByClassName("location-name");
const countryFlag = document.getElementsByClassName("country-flag");
const desc = document.querySelector("[country-flag]");
const dataIcon = document.querySelector("[data-icon]");
const celsius = document.querySelector("[data-celsius-name]");


// initial need???
// https://openweathermap.org/api


let currentTab = userTab;
const API_KEY = "7ac1e97af7e6452372b4c4c507270359";

currentTab.classList.add("currentTab");


// switching tab function

function switchedTab(clickedTab) {
     if (clickedTab != currentTab) {
          currentTab.classList.remove("currentTab");
          currentTab = clickedTab;
          currentTab.classList.add("currentTab");
     }
}
userTab.addEventListener("click", () => {
     switchedTab(userTab);
})

searchTab.addEventListener("click", () => {
     switchedTab(searchTab);
})
