/*
 * Using the Promise object
 */

let promise = new Promise(((resolve, reject) => {
    resolve("Hello");
}))

/*
 * Using async named function
 */
async function createPromise() {
    return "Hello";
}

/*
 * Using async function expression
 */
createPromise = async function() {
    return "Hello";
}

/*
 * Using async arrow function expression
 */
createPromise = async () => "Hello";
