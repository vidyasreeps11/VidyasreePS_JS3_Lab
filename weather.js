const searchButton = document.querySelector("#search_button");
var searched_city = document.getElementById("searched_city");
var dateView = document.getElementById("date");
const city = document.getElementById("city");


searchButton.addEventListener("click", function fetchWeatherData(){

    
        const key=`1f98c1655d470d3fd7e62ae72fd5dc53`;
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`;
    
            var descp;
    
            fetch(url).then((response) => response.json())
            .then((data) => displayWeather(data))
            .catch((error) => displayError(error)); 
            
});
 
    

function displayWeather(data) {

    console.log(data);
    descp=data.weather[0].main;
              
    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const weekArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const currentDate=new Date();

    let weekDay = weekArray[currentDate.getDay()];
    let day = currentDate.getDate();
    let month = monthArray[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    searched_city.innerText = city.value.charAt(0).toUpperCase() + city.value.slice(1);
    dateView.innerText = `${weekDay}, ${day} ${month} ${year}`;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("image_icon").innerHTML=
    `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" width="90" height="100"></img>`;
    document.getElementById("description").innerText = descp;
    document.getElementById("min_max_temp").innerText =`${data.main.temp_max}°C / ${data.main.temp_min}°C`;
    
    

}


function displayError(error) {

    document.getElementById("error_block").innerText="Enter a valid city name...!!!";
    document.getElementById("error_block").style.display="block";

    console.log(error);

}
