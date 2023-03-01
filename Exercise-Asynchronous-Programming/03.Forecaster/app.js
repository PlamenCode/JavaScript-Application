async function attachEvents() {
    let getWeatherBtn = document.getElementById('submit');
        getWeatherBtn.addEventListener('click', getWeather);

    let forecastDiv = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');

    let symbols = {
    Sunny: '&#x2600',
    'Partly sunny':'&#x26C5', 
    Overcast:'&#x2601', 
    Rain:'&#x2614', 
    Degrees:'&#176' 
    }
    
    async function getWeather(){
        let location = document.getElementById('location');

        forecastDiv.style.display = 'block';

        try{
        let responce = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        let data = await responce.json();
        let cityData;
        for (const city of data) {
            if(city.name == location.value){
                cityData = city;
            }

            createTodayForecast(cityData.code)
            createUpcomingForecast(cityData.code)
        }   
    } catch {
        let label = document.getElementsByClassName('label');
            label.textContent = 'Error';
    }  
    }

    async function createTodayForecast(code){
        console.log('hellooooo');
        try{
            let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            let todayResponce = await fetch(todayUrl);
            let todayData = await todayResponce.json();

        let name = todayData.name;
        let lowTemp = todayData.forecast.low;
        let highTemp = todayData.forecast.high;
        let condition = todayData.forecast.condition;

        let mainDiv = document.createElement('div');
            mainDiv.classList.add('forecast');

        let symbolSpan = document.createElement('span');
            symbolSpan.setAttribute('class', 'conditon symbol');
            symbolSpan.innerHTML =  symbols[condition];

        let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
        
        let spanLocation = document.createElement('span');
            spanLocation.classList.add('forecast-data');
            spanLocation.textContent = `${name}`;

        let highLow = document.createElement('span');
            highLow.classList.add('forecast-data');
            let degreeSymbol = symbols.Degrees;
            highLow.innerHTML = `${lowTemp}${degreeSymbol}/${highTemp}${degreeSymbol}`;

        let weather = document.createElement('span');
            weather.classList.add('forecast-data');
            weather.textContent = `${condition}`;

        conditionSpan.appendChild(spanLocation);
        conditionSpan.appendChild(highLow);
        conditionSpan.appendChild(weather);

        mainDiv.appendChild(symbolSpan);
        mainDiv.appendChild(conditionSpan);
        
        current.replaceChildren(mainDiv);
        } catch{
            let label = document.getElementsByClassName('label');
                label.textContent = 'Error';
        }
    }

    async function createUpcomingForecast(code){
        try{
            let upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
            let responce = await fetch(upcomingUrl);
            let data = await responce.json();
        

        let mainDiv = document.createElement('div');
            mainDiv.classList.add('forecast-info');

        for (const day of data.forecast) {
            let low = day.low;
            let high = day.high;
            let condition = day.condition;

            let span = document.createElement('span');
                span.classList.add('upcoming');

            let symbolSpan = document.createElement('span');
                symbolSpan.classList.add('symbol');
                symbolSpan.innerHTML = symbols[condition];

            let degreesSpan = document.createElement('span');
                degreesSpan.classList.add('forecast-data');
                let degreeSymbol = symbols.Degrees;
                degreesSpan.innerHTML = `${low}${degreeSymbol}/${high}${degreeSymbol}`;

            let conditionSpan = document.createElement('span');
                conditionSpan.classList.add('forecast-info');
                conditionSpan.textContent = condition;

            span.appendChild(symbolSpan);
            span.appendChild(degreesSpan);
            span.appendChild(conditionSpan);

            mainDiv.appendChild(span) 
        }
        upcoming.replaceChildren(mainDiv)
    } catch {
        let label = document.getElementsByClassName('label');
            label.textContent = 'Error';
    }
    }
}

attachEvents();