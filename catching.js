let createRandomlyFailingPromise = function() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("SUCCESS!");
        } else {
            reject("FAIL!");
        }
    });
};

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

/*
 * Catching a `Promise` with `.catch()`
 */

createRandomlyFailingPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

/*
 * "Catching" a `Promise` with `.then(onFulfilled, onRejected)`
 */

createRandomlyFailingPromise()
    .then(
        (response) => console.log(response),
        (response) => console.log(response)
    );

/*
 * Beware that handling rejected Promises with `.then(onFulfilled, onRejected)`
 * is functionally different from `.catch()`
 */

// Compare this...

Promise
    .race([
        slowSucceedingPromise(),
        fastFailingPromise()
    ])
    .then(
        (response) => console.log(response),
        (response) => console.log(response)
    );

// ...to this:

Promise
    .race([
        slowSucceedingPromise(),
        fastFailingPromise()
    ])
    .catch(() => console.log('CATCHED!'));

// In the first case the fast failing Promise is put back in the queue
// and the process continues settling the slow succeeding Promise that
// is now first in the queue. In the latter case the `.catch()` definition
// terminates further execution of the queue after the fast failing
// Promise rejected.



