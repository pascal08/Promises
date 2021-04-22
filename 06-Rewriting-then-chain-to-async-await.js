let createHelloPromise = function() {
    return new Promise((resolve, reject) => {
        resolve("Hello")
    });
};

let createHelloWorldPromise = function() {
    return new Promise((resolve, reject) => {
        resolve("Hello World")
    });
};

/*
 * Rewrite a `Promise` chain with `.then()` to `async` and `await`
 */

// This `.then()` chain...

createHelloPromise()
    .then(hello => createHelloWorldPromise(hello))
    .then(helloWorld => console.log(helloWorld));

// ...can be written like this using async/await:

async function helloWorld() {
    let hello = await createHelloPromise();
    let helloWorld = await createHelloWorldPromise();

    console.log(helloWorld);
}
helloWorld();

