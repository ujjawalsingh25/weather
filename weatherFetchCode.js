const page = document.querySelector('#page3');
const weatherContainer = document.querySelector('.weatherContainer');
const searchBox = document.querySelector('.searchBox');
const weatherBox = document.querySelector('.weatherBox'); 
const weatherDeatils = document.querySelector('.weatherDeatils'); 
const error404 = document.querySelector('.notFound'); 
const notificationElement = document.querySelector('.notification'); // Assuming notificationElement is a glob
let myLatitude, myLongitude; // Declare latitude and longitude as global variables

// ----------------------------------------------------------------------------------------------------------------



// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
    myLatitude = position.coords.latitude;
    myLongitude = position.coords.longitude;
}


// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}



live.addEventListener('click', () => {
    const APIkey = '2138085e7832baf22500bc867e2a7eeb';

    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&units=metric&appid=${APIkey}`;
    fetch(api)
        .then(response => response.json())
        .then(json => {
            weatherContainer.style.height = '500px';
            weatherBox.classList.add('active');
            weatherDeatils.classList.add('active');
            error404.classList.remove('active');

            const image = weatherBox.querySelector('img');
            const temprature = weatherBox.querySelector('.temprature');
            const description = weatherBox.querySelector('.description');
            const humidity = document.querySelector('#infoHumidity');
            const wind = document.querySelector('#infoWind');
            const weatherImg = document.querySelector('weatherIMG');
            const cityName = document.querySelector('#cityName'); 
            cityName.style.visibility = 'visible';


            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/sunny.png';
                    break;
                case 'Rain':
                    image.src = 'img/rain.png';
                    break;
                case 'Snow':
                    image.src = 'img/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'img/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'img/mist.png';
                    break;
                case 'Haze':
                    image.src = 'img/mist.png';
                    break;
                default:
                    image.src = 'img/cloud.png';
            }

            console.log(json.name);
            console.log(json.main.temp);
            console.log(json.weather[0].description);
            console.log(json.main.humidity);
            console.log(json.wind.speed);

            cityName.innerHTML = `Your City: ${json.name}`;
            temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/hr`;
            weatherImg.innerHTML = `<img src="icons/${json.weather.iconId}.png"/>`;

            const placeHolder = document.querySelector('#placeHolder');
            placeHolder.placeholder = 'Your City';

        })
        .catch(error => {
            // Handle fetch errors, e.g., network issues
            console.error('Fetch error:', error);
        });
});



// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------



searchBox.addEventListener('click', () => {
    const APIkey = '2138085e7832baf22500bc867e2a7eeb';
    const city = document.querySelector('.searchBox input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {


            if(json.cod == '404'){
                weatherContainer.style.height = '400px';
                weatherBox.classList.remove('active');
                weatherDeatils.classList.remove('active');
                error404.classList.add('active');
                return;
            }
           
            weatherContainer.style.height = '540px';
            page.style.height = '750px';
            weatherBox.classList.add('active');
            weatherDeatils.classList.add('active');
            error404.classList.remove('active');   



            const image = weatherBox.querySelector('img'); 
            const temprature = weatherBox.querySelector('.temprature');
            const description = weatherBox.querySelector('.description');
            const humidity = document.querySelector('#infoHumidity'); 
            const wind = document.querySelector('#infoWind'); 

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/sunny.png';
                    break;
                case 'Rain':
                    image.src = 'img/rain.png';
                    break;
                case 'Snow':
                    image.src = 'img/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'img/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'img/mist.png';
                    break;
                case 'Haze':
                    image.src = 'img/mist.png';
                    break;
                default:
                    image.src = 'img/cloud.png';
            }

            console.log(json.main.temp);
            console.log(json.weather[0].description);
            console.log(json.main.humidity);
            console.log(json.wind.speed );

            temprature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} Km/hr`;  


            const cityName = document.querySelector('#cityName');
            cityName.style.visibility = 'hidden';
            
        });
});
