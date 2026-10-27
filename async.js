const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 12345;
var b = 54321;

//synschronus
// fs.readFileSync("./file.txt","utf8",(err, data)=>{
//     console.log("This will execute only after file read.");
// });

https.get("https://dummyjson.com/products/1", (res) =>{
    console.log("Fetched Data Successfully.");
});

setTimeout(()=>{
    console.log("Settimeout called after 5 sec");
},5000);

//asychronus operation
fs.readFile("./file.txt","utf8",(err, data)=>{
    console.log("File Data :", data);
});

function multiply(x, y) {
    const result = x*y;
    return result;
}

var c = multiply(a, b);

console.log("Multiplication result is:", c);