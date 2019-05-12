const request = require('request');


// 1. Get the thing
// 2. handle errors with the request
// 3. Handle errors parsing the JSON
// 4. if successful make another call to lookup the inhabitants and display their names



// 1. Create the Promise
function getStarWarsDataWithPromise(uri){

    return new Promise(function (resolve, reject){
        request(uri, function (error, response, body) {
            if (error) reject(error);
            else resolve(body);
        });
    });

}




let uris = [
    'https://swapi.co/api/planets/1/',
    'https://swapi.co/api/planets/1/abc',
    'abc'
];

// 2. Consume the Promise (here, .then() acts like the callback)
getStarWarsDataWithPromise(uris[0])
    .then(
    function(body) {

        // get the planet's name
        let planet = JSON.parse(body);
        let planetDescription = `The planet's name is ${planet['name']} and its population is ${planet["population"]}`
        console.log(planetDescription);

        // now we need to make another request to get the names of all the people who live on this planet.
        // how do we do that with Promises?
        console.log(planet["residents"]);

    })
    .catch(function(e){
        console.log(e.message);
});

// Learning # 1
// If an error is thrown in the Promise, we go to catch to handle it
// BUT! If an error is thrown inside .then() we ALSO go to .catch!
// wherever the first error is thrown, catch will catch it. NICE
// in the callback version, we have to handle this ourselves

