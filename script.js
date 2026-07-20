let a="https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=5147a9c8e58d0541e5823538070b72ca"
const apikey="5147a9c8e58d0541e5823538070b72ca";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";
//{city name}&appid={API key}";
let input=document.querySelector('.search input');
let btn=document.querySelector('.search button');
btn.addEventListener("click",()=>{
    let city=input.value;
    if(city=='') {
        alert("Enter city name:");
        console.log("Enter Data");
        return;
    }
    check(city);
})

async function check(city){
    try{
   const response=await fetch(apiurl+`${city}&units=metric&appid=${apikey}`);
   const data=await response.json();
    if (data.cod === "404") {
    alert("City not found. Please enter a valid city name.");
    document.querySelector('.weather').style.display = 'none';
    return;
}
   console.log(data);
   console.log(data.name);
   document.querySelector('.city').innerText=data.name;
   document.querySelector('.temp').innerText=Math.round(data.main.temp)+`°C`;
   document.querySelector('.humidity').innerText=data.main.humidity+`%`;
   document.querySelector('.wind').innerText=data.wind.speed+`km/h`;
   document.querySelector('.weather').style.display='block';
   if((data.weather[0].main)=="Clear"){
    document.querySelector('.weather-icon').src="imagesWeather/clear.png"
   }
   else if((data.weather[0].main)=="Clouds"){
    document.querySelector('.weather-icon').src="imagesWeather/clouds.png"
   }
   else if((data.weather[0].main)=="Drizzle"){
    document.querySelector('.weather-icon').src="imagesWeather/drizzle.png"
   }
   else if((data.weather[0].main)=="Mist"){
    document.querySelector('.weather-icon').src="imagesWeather/mist.png"
   }
   else if((data.weather[0].main)=="Rain"){
    document.querySelector('.weather-icon').src="imagesWeather/rain.png"
   }
   else if((data.weather[0].main)=="Snow"){
    document.querySelector('.weather-icon').src="imagesWeather/snow.png"
   }
}
catch(e){
   console.log("Error is",e);
   document.querySelector('.weather').style.display='none';
}
}


   

