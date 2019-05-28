function asyncTask(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            return setTimeout(() => {
                resolve(asyncTask2());
            }, 500);
        }

        reject({
            error: 'url missing in async task 1'
        });
    });
}

function asyncTask2(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            return resolve({
                id:2
            });
        }

        reject({
            error: 'url missing in async task 2'
        });
    });
}

asyncTask('google.com')
    .then((response) => {
        console.log(response);
    })
    .catch(err => {
        console.log('failed ', err); // { error: 'url missing in async task 2' }
        return err;
    });