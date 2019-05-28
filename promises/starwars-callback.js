const request = require('request');

// 1. Get the thing
// 2. handle errors with the request
// 3. Handle errors parsing the JSON
// 4. if successful make another call to lookup the inhabitants and display their names

let uris = [
    'https://swapi.co/api/planets/1/',
    'https://swapi.co/api/planets/1/abc',
    'abc'
];

function getStarWarsData(uri, callback){

    request(uri, function (error, response, body) {
        callback(error, body);
    });


}


getStarWarsData('https://swapi.co/api/planets/1/', function(error, body){

    if(error){
        console.log(error.message);
        return;
    }

    try{
        let planet = JSON.parse(body);
        console.log(planet.name);
    }
    catch(error){
        console.log(error.message);
    }

});






