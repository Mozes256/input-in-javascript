const readline = require("readline-sync");

let num1 = readline.questionFloat("Enter first number: ");
let num2 = readline.questionFloat("Enter second number: ");

let product = num1 * num2;
console.log("product", product);
