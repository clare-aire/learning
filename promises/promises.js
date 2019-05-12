var isMomHappy = true;

// Q. Does a Promise have to handle both RESOLVE and REJECT cases?
// Q. What is a real world application of a Promise?


// First Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'iPhone',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// Second Promise
// var showOff = function (phone) {
//     return new Promise(
//         function (resolve, reject) {
//             var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//             resolve(message);
//         }
//     );
// };


var askMom = function () {

    // if we add a second Promise .then BEFORE the first ones .then THAT promise goes
    // in the .then and we swallow the FIRST
    willIGetNewPhone
        .then(function(fulfilled){
            console.log('FIRST FULFILLED MESSAGE');
        })
        .then(function (fulfilled) {
            console.log('SECOND FULFILLED MESSAGE');
        })
        .then(function (fulfilled) {
            console.log('THIRD FULFILLED MESSAGE');
        })
        .catch(function (error) {
            console.log(error.message);
        });
};

// DO THE THING
askMom();

// Watch out for:
// the Promise rejects, but we're not handling it
// chaining promises and calling BOTH fulfilled/resolves
