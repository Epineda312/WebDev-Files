const https = require('https');
const querystring = require('querystring');
const api = require('./api.json');

// Print out temp details
function printWeather(weather) {
  const message = `Current temperature in ${weather.name} is ${weather.main.temp}F`;
  console.log(message);
}

// Print out error message

function get(query) {
    //const url = `https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`;

    const parameters = {
      APPID: api.key,
      units: 'imperial'
    };

    const zipCode = parseInt(query);
    if (!isNaN(zipCode)) {
      parameters.zip = zipCode + ',us';
    } else {
      parameters.q = query + ',us';
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(parameters)}`;
    console.log(url);

    const request = https.get(url, response => {
        let body = '';
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            //Parse data
            const weather = JSON.parse(body);
            //Print the data
            printWeather(weather);
        });
    });
}

module.exports.get = get;

//TODO: Handle any errors