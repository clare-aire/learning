const request = require('request');


// 1. Create the Promise
function getPlanetsWithPromise(){

    return new Promise(function (resolve, reject){
        request('https://swapi.co/api/planets/1/', function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });

}

// 2. Consume the Promise
getPlanetsWithPromise().then(
    function(body) {

        let planet = JSON.parse(body);
        let planetDescription = `The planet's name is ${planet['name']} and its population is ${planet["population"]}`
        console.log(planetDescription);
    });


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
    let planetDescription = `The planet's name is ${planet['name']} and its population is ${planet["population"]}`
    console.log(planetDescription);
}

getPlanetsWithCallback(displayPlanets)

// Learn Concepts
// Translate to ES6
// High level patterns and design



