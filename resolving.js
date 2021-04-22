/*
 * Create Promise with async and resolving with .then()
 */

let promise = new Promise(((resolve, reject) => {
    resolve("Hello");
}))

promise.then((result) => console.log(result));

/*
 * Create Promise with async and resolving with .then()
 */

async function asyncFunction() {
    return "Hello";
}

asyncFunction()
    .then((result) => console.log(result));

// or

asyncFunction = async function() {
    return "Hello";
}

asyncFunction()
    .then((result) => console.log(result));

// or

asyncFunction = async () => "Hello";

asyncFunction()
    .then((result) => console.log(result));

/*
 * Promise resolving async/await
 */

async function asyncAwaitPromise() {
    return await promise;
}

asyncAwaitPromise().then((result) => console.log(result));
