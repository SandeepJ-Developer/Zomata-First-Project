var weatherinfo = document.getElementById("weatherinfo");
var cityinfo = document.getElementById("cityinfo");

function geolocation(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(data){
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    // api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) => res.json())
    //return datatype
    .then((data) => {
        let cityName = data.city.name
        let weather = `${data.list[0].temp.day}° C - `;
        weatherinfo.innerText = weather;
        cityinfo.innerText = cityName;
        document.getElementById('weatherimg').style.visibility = 'visible';
    })
}
