let randomlyFailingPromise = function() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("SUCCESS!");
        } else {
            reject("FAIL!");
        }
    });
};

// This:

randomlyFailingPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Equals this:

randomlyFailingPromise()
    .then(
        (response) => console.log(response),
        (response) => console.log(response)
    );

// Except that:

let slowSucceedingPromise = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve("SUCCESS!");
        }, 1000);
    }))
}
let fastFailingPromise = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            reject("FAIL!");
        }, 0);
    }))
}

// this behaves different...

Promise
    .race([
        slowSucceedingPromise(),
        fastFailingPromise()
    ])
    .then(
        (response) => console.log(response),
        (response) => console.log(response)
    );

// than this:

Promise
    .race([
        slowSucceedingPromise(),
        fastFailingPromise()
    ])
    .catch(() => console.log('CATCHED!'));

// because JS puts the fast failing promise back in the queue when using .then().
// When using .catch() JS always passes the first failing promise to the catch clause



