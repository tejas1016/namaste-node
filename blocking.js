const crypto = require("crypto");

console.log("Hello World");

var a = 1134345;
var b = 35345;

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512",(err,data) {
    console.log("Key is generated");
});

function multiply(x, y) {
    const result =  x * y;
    console.log("result",result);

}