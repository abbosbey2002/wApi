'use strict'
const country=document.querySelector('.city')
const date=document.querySelector('.date')
const temp=document.querySelector('.temp')
const hi_low=document.querySelector('.hi_low')
const search_box=document.querySelector('.search_box')
const weatherEl=document.querySelector('.weather')

const api={
    key:'f15ffcab66824bb09933094223be71d1',
    baseUrl:'https://api.openweathermap.org/data/2.5/'
}

search_box.addEventListener('keypress',(e)=>{
   if(e.key=='Enter'){

    getResault(search_box.value)
   }
})

function getResault(query){

    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
.then(weather=>{
 return weather.json()
}).then(displayResault)
    
} 


function displayResault(weather){
    console.log(weather);
     country.textContent=`${weather.name} ${weather.sys.country}`
     let now = new Date()
     date.textContent=dataBuilder(now)
     temp.innerHTML=`${Math.round(weather.main.temp)} <span> °C </span>`
     weatherEl.textContent=weather.weather[0].main;
     hi_low.innerHTML=`${Math.round(weather.main.temp_min)} °C/ ${Math.round(weather.main.temp_max)}°C`
}



function dataBuilder(now){
  let  month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
 let  week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day=week[now.getDay()]
    let date=now.getDate();
    let monthe=month[now.getMonth()]
    let year=now.getFullYear();
    return `${day} ${date} ${monthe} ${year}`
}
