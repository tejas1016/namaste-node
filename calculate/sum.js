console.log("Sum module executed");

var x = "Hello World";
var y = "This is another variable";
function calculateSum(p, q) {
    const sum = p + q;
    console.log(sum);
}

module.exports = {
    x,
    y,
    calculateSum: calculateSum
};