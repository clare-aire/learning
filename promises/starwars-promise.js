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
        console.log('HERE?!');
        console.log(body);
        let person = JSON.parse(body);
        let personDescription = `A person who lives here is ${person['name']}`
        console.log(personDescription);
    }
    )
    .catch(function(e){
        console.log('in catch')
        console.log(e.message);
});

// My experimemts with this show also that if you implement onrejected when chaining promises
// even though the first promise rejects, execution still moves into the next Promises onfulfilled!
// we just barrel on down the road to the next .then()'s onfullfilled - which obviously fails as its dependent
// on the success of the previous one! To stop this, I can catch the error and halt exexution by implementing .catch.
// therefore a good rule of thumb is ABC - Always Be Catching!


/**
 * Why is implementing onfulfilled and onrejected considered am anti-pattern?
 *
 * if onfulfilled throws an error, this implies that promise returned by then is rejected - so even though
 * you're catching the initial rejection, .then() will reject and you'll get a 'UnhandledPromiseRejectionWarning: Unhandled promise rejection'
 *
 * I prefer the pattern of ALWAYS implementing catch - I see it as giving you more comprehensive error handling out of the box.
 *
 * ALSO - if the first promise in a chain is rejected, we STILL execute the next .then() it's a car crash!
 *
 */
