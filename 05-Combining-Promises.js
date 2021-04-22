let createPromise = function(fail = false, timeout = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(`FAILED! after ${timeout}ms`);
            } else {
                resolve(`SUCCESS! after ${timeout}ms`);
            }
        }, timeout);
    });
};

let fastSucceedingPromise = function(timeout) {
    return createPromise(false, 0);
};
let slowSucceedingPromise = function(timeout) {
    return createPromise(false, 1000);
};
let fastFailingPromise = function(timeout) {
    return createPromise(true, 0);
};
let slowFailingPromise = function(timeout) {
    return createPromise(true, 1000);
};

/*
 * Wait until every promise is resolved and reject as soon as one fails
 */

Promise
    .all([
        fastSucceedingPromise(),
        slowSucceedingPromise(),
        fastFailingPromise(),
        slowFailingPromise(),
    ])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));

/*
 * Wait for the first promise to be settled (resolved or rejected)
 */

Promise
    .race([
        fastSucceedingPromise(),
        slowSucceedingPromise(),
        fastFailingPromise(),
        slowFailingPromise(),
    ])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));

/*
 * Wait for the first promise to be fulfilled (or return AggregateError if all are rejected)
 */

Promise
    .any([
        fastFailingPromise(),
        slowFailingPromise(),
    ])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));

/*
 * Wait until every promise is resolved no matter how many promises fail
 */

Promise
    .allSettled([
        fastSucceedingPromise(),
        slowSucceedingPromise(),
        fastFailingPromise(),
        slowFailingPromise(),
    ])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));
