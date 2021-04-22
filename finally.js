let randomlyFailingPromise = function() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("SUCCESS!");
        } else {
            reject("FAIL!");
        }
    });
};

randomlyFailingPromise()
    .then((response) => console.log(response))
    .catch((response) => console.log(response))
    .finally(() => console.log("FINALLY!"));