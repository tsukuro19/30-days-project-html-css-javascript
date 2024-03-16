const APIkey="3d32504f9b07c3933190d9bd8c50fe6a";
const APIurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon").classList;

async function checkWeather(city){
    const response=await fetch(APIurl+`&q=${city}`+`&appid=${APIkey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="flex";
        document.querySelector(".weather").style.display="none";
    }

    let data=await response.json();
    let weather=data.weather[0].main;

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    if(weather==="Clouds"){
        weatherIcon.remove("fa-cloud-rain");
        weatherIcon.add("fa-cloud");
    }else if(weather==="Clear"){
        weatherIcon.remove("fa-cloud-rain");
        weatherIcon.add("fa-cloud-sun");
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value.replace(/\s/g,''));
})

