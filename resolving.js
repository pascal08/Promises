let createPromise = () => {
    return new Promise(((resolve, reject) => {
        resolve("Hello");
    }))
};

/*
 * Resolving with `.then()`
 */

createPromise()
    .then((result) => console.log(result));

/*
 * Resolve promise with `await`
 */

async function wrappedPromise() {
    return await createPromise();
}

wrappedPromise().then((result) => console.log(result));
