
// What does .catch() actually catch?


// Well. The answer is, quite a lot! Not just when a promise is rejected!
// It's rather special. Let's have a look at how it works:
// Obviously the first explicit reject() call gets handled by catch, but what else?

// 1. bugs in the Promise Constructor
function asyncTask(url) {
    return new Promise((resolve, reject) => {

        a.push(1);

        if (url) {
            return setTimeout(() => {
                resolve({
                    id: 1
                });
            }, 500);
        }

        reject({
            error: 'url missing in async task 1'
        });
    });
}

asyncTask('google.com')
    .then(function(response){
        console.log(response);
    })
    .catch(err => console.log(err.message)); //  ReferenceError: a is not defined



// 2. Explicit throw() errors in the Promise Constructor

function asyncTask2(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            throw new Error('terminate now');
            return setTimeout(() => {
                resolve({
                    id: 1
                });
            }, 500);
        }

        reject({
            error: 'url missing in async task 2'
        });
    });
}

asyncTask2('google.com')
    .then(function(response){
        console.log(response);
    })
    .catch(err => console.log(err.message)); // Error: terminate now

// 3. If a promise resolves by calling another Promise - any errors thrown there will
// also bubble up to the first promise's catch() as well.


