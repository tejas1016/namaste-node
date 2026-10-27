require("./xyz"); // one module into another
// const {x, y, calculateSum} = require("./calculate/sum");
// const {calculateMultiply} = require("./calculate/multiply");

const {calculateMultiply,calculateSum} = require("./calculate");
const data = require("./data.json");
var name = "Tejas Mulay";

var a = 10;
var b = 20;

console.log(data);
calculateSum(a,b);
calculateMultiply(a,b);

// console.log();
// console.log(x);
// console.log(y);
