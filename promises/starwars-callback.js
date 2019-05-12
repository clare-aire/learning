const request = require('request');

// 1. Get the thing and handle errors with the request
// 2. Handle errors parsing the JSON
// 3. if successful make another call to lookup the inhabitants and display their names

function getPlanetsWithCallback(callback){

    request('https://swapi.co/api/planets/1/', function (error, response, body) {
        if (error) {
            console.log(error);
        }
        else callback(body);
    });


}

function displayPlanets(body){

    let planet = JSON.parse(body);
    let planetDescription = `The planet's name is ${planet['name']} and its terrain is ${planet["terrain"]}`
    console.log(planetDescription);
}

getPlanetsWithCallback(displayPlanets);





