const request = require('request');

// 1. Get the thing
// 2. handle errors with the request
// 3. Handle errors parsing the JSON
// 4. if successful make another call to lookup the inhabitants and display their names

function getPlanetsWithCallback(uri, callback){

    request(uri, function (error, response, body) {
        if (error) {
            console.log(error.message);
        }
        else callback(body);
    });


}

let uris = [
    'https://swapi.co/api/planets/1/',
    'https://swapi.co/api/planets/1/abc',
    'abc'
];


getPlanetsWithCallback(uris[0], displayPlanets);

function displayPlanets(body){

    try{
        let planet = JSON.parse(body);
        let planetDescription = `The planet's name is ${planet['name']} and its terrain is ${planet["terrain"]}`
        console.log(planetDescription);
    }
    catch(e){
        console.log(e.message);
    }

}



