const fs = require("fs");

const a=100;
setImmediate(() => {
    console.log("setImmediate");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

fs.readFile("./file.txt", "utf8",() => {
    console.log("File reading CB");
});

setTimeout(()=> {
    console.log("Timer Expired");
},0);

process.nextTick(() => {
    console.log("process.nextTick");
});

function printA() {
    console.log("a=",a);
}

printA();

console.log("Last line of the file.");

/**
 * a=100
 * Last line of the file.
 * process.nextTick
 * Promise
 * Timer Expired
 * setImmediate
 * File reading CB
 */