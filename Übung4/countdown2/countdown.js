let counter = 10;

module.exports.setCountdown = setCountdown;

let setCountdown = function (counter) {
    console.log(counter);
    let timer = setInterval(() => {
        console.log(--counter)
    }, 1000);

    setTimeout(() => {
        clearInterval(timer)
    }, counter * 1000 + 1100);
};



let setDecrementsPerSecond = function(decrements){    decrementsPerSecond = decrements; }
module.exports.setDecrementsPerSecond = setDecrementsPerSecond

let setCountdown = function (counter) {
    console.log(counter);
    let timer = setInterval(() => {
        console.log(--counter)
    }, 1000 / decrementsPerSecond);
    setTimeout(() => {
        clearInterval(timer)
    }, counter * 1000 / decrementsPerSecond + 100);
};


