
const apikey="f76b4c3c105a0623d87a666913c52317";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");

const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");


async function checkWeather(city){

    
const response=await fetch(apiurl +city + `&appid=${apikey}`);
if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

}
else{
    var data=await response.json();
    console.log(data);

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
document.querySelector(".wind").innerHTML= data.wind.speed+" km/h";

if(data.weather[0].main=="Clouds"){
    weathericon.src="SkyTracker/Images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weathericon.src="SkyTracker/Images/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weathericon.src="SkyTracker/Images/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weathericon.src="SkyTracker/Images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weathericon.src="SkyTracker/Images/mist.png";
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

}
}

searchbtn.addEventListener("click", ()=>{
checkWeather(searchbox.value);
})

