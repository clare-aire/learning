const request = require('request');

let uris = [
    'https://swapi.co/api/planets/1/',
    'https://swapi.co/api/planets/1/abc',
    'abc'
];


function getStarWarsData(uri){

    return new Promise(function (resolve, reject){

        request(uri, function (error, response, body) {
            if (error) reject(error);
            else resolve(saveStarWarsData(body));
        });
    });

}

function saveStarWarsData(body){
    return new Promise(function (resolve, reject){

        // do the async thing and resolve or reject...
        // use node async FS write so we're not blocked
        // reject(error);
        resolve(stuff);
    });
}

getStarWarsData(uris[0])
    .then(
    function(stuff) {
        console.log(stuff);
    })
    .catch(function(error){
        console.log(error.message);
});


