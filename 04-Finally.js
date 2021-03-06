let createRandomlyFailingPromise = function() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("SUCCESS!");
        } else {
            reject("FAIL!");
        }
    });
};

createRandomlyFailingPromise()
    .then((response) => console.log(response))
    .catch((response) => console.log(response))
    .finally(() => console.log("FINALLY!"));