function randomDelayPrint(message, index) {
    let cummulativeTimeout = 0
    for (let index = 0; index < message.length; ++index) {
        cummulativeTimeout += Math.random() * 1000
        setTimeout(() => {
            console.log(message[index]);
        }, cummulativeTimeout);
    }
}

randomDelayPrint("Hello");


function debounce(callback, delay) {
    let timeoutId;

    return function (...args) {

        if (timeoutId) {
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}


const debounced = debounce(() => {
    console.log("debounced")
}, 0.01)

debounced()
debounced()
debounced()

function intervalRace(functions, t) {
    return new Promise((resolve) => {
        let results = [];
        let index = 0;

        function callFunction() {
            if (index < functions.length) {

                results.push(functions[index]());
                index++;

                setTimeout(callFunction, t);
            } else {

                resolve(results);
            }
        }


        callFunction();
    });
}


const func1 = () => 'Result 1';
const func2 = () => 'Result 2';
const func3 = () => 'Result 3';

intervalRace([func1, func2, func3], 1000).then(results => {
    console.log(results);
});
