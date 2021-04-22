/*
 * Promise chaining to async/await
 */

// This pure Promise chain...

let helloPromise = function() {
    return new Promise((resolve, reject) => {
        resolve("Hello")
    });
};

let worldPromise = function(hello) {
    return new Promise((resolve, reject) => {
        resolve(hello + " World")
    });
};

helloPromise()
    .then(hello => worldPromise(hello))
    .then(helloWorld => console.log(helloWorld));

// can be written like this using async/await:

async function helloWorld() {
    let hello = await helloPromise();
    let helloWorld = await worldPromise(hello);

    console.log(helloWorld);
}
helloWorld();

