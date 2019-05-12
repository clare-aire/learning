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

        let uris = planet['residents'];
        uris.reduce(function(i){
            console.log(uris[i]);
        },0);


    })
    .catch(function(e){
        console.log(e.message);
});
