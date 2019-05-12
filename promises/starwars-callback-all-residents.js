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
        if (error) {
            console.log(error.message);
        }
        else callback(body);
    });


}


getStarWarsData(uris[0], function(body){

    try{
        let planet = JSON.parse(body);
        getStarWarsData(planet['residents'][0], function(body){

            try{
                let person = JSON.parse(body);
                let personDescription = `A person who lives here is ${person['name']}`
                console.log(personDescription);
            }
            catch(e){
                console.log(e.message);
            }

        })

    }
    catch(e){
        console.log(e.message);
    }

});






