function getWeather(){
    const apiKey = 'dd0200d0aaa5c997c671ab248e49baf8';
    const city = document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/ data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = 'https://api.openweathermap.org/data/ 2.5/forecast?q=${city}&appid=${apiKey}`;     
}


