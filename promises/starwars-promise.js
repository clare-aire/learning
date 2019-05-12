const request = require('request');


// 1. Get the thing and handle errors with the request
// 2. Handle errors parsing the JSON
// 3. if successful make another call to lookup the inhabitants and display their names



// 1. Create the Promise
function getPlanetsWithPromise(){

    return new Promise(function (resolve, reject){
        request('https://swapi.co/api/planets/1/abc', function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });

}

// 2. Consume the Promise (here, .then() acts like the callback)
getPlanetsWithPromise()
    .then(
    function(body) {

        let planet = JSON.parse(body);
        let planetDescription = `The planet's name is ${planet['name']} and its population is ${planet["population"]}`
        console.log(planetDescription);

    }).catch(function(error){
        console.log('IT WENT WRONG', error);
});


// 1. CATCH in this case catches EVERYTHING!!!! Means you have to write less error handling
// SICK!!!


