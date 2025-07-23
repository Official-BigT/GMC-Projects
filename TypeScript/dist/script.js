"use strict";
// Typescript is a superset of JavaScript that adds static types.
// This script demonstrates a simple TypeScript function that adds two numbers.
let firstName = "John";
let lastName = "Doe";
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(greet(firstName, lastName));
// Special variable types in TypeScript to allow any type of data type or value.
let u = true;
u = "Triumph";
// ***Data Types***
const names = ["BigT", "Luigi", "Mario"];
names.push("Peach");
names.push({ food: "Tufu Curry" }); // Use 'as any' to bypass type checking if type is known
console.log(names);
// Enums _-_ Enumerations
// enum Level { high, medium, low }
var Cpoints;
(function (Cpoints) {
    Cpoints[Cpoints["North"] = 3] = "North";
    Cpoints[Cpoints["East"] = 4] = "East";
    Cpoints[Cpoints["South"] = 5] = "South";
    Cpoints[Cpoints["West"] = 6] = "West";
})(Cpoints || (Cpoints = {}));
console.log(Cpoints.West);
