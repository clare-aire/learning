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

// 1. Create the Promise - note in tnis case we are wrapping the response from request in a Promise just for illustration
// purposes
function getStarWarsData(uri){

    return new Promise(function (resolve, reject){
        request(uri, function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });

}

// 2. Consume the Promise
getStarWarsData(uris[0])
    .then(
    function(body) {
        let planet = JSON.parse(body);
        return getStarWarsData(planet['residents'][0]);
    })
    .then(
    function(body){
        let person = JSON.parse(body);
        let personDescription = `A person who lives here is ${person['name']}`
        console.log(personDescription);
    }
    )
    .catch(function(e){
        console.log(e.message);
});

// Learning # 1 - errors bubble up!
// If an error is thrown in the Promise, we go to catch to handle it
// BUT! If an error is thrown inside .then() we ALSO go to .catch!
// Wherever an error is thrown, it bubbles up to be caught by catch. I think this is really nice.
// in the callback version, we have to handle this ourselves


// Learning # 2
