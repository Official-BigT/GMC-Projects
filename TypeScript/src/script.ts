// Typescript is a superset of JavaScript that adds static types.
// This script demonstrates a simple TypeScript function that adds two numbers.

let firstName: string = "John";
let lastName: string = "Doe";
function greet(firstName: string, lastName: string): string {
  return `Hello, ${firstName} ${lastName}!`;
}
console.log(greet(firstName, lastName));

// Special variable types in TypeScript to allow any type of data type or value.
let u: any = true;
u = "Triumph";

// ***Data Types***
const names: any[] = ["BigT", "Luigi", "Mario"];
names.push("Peach");
names.push({ food: "Tufu Curry" }); // Use 'as any' to bypass type checking if type is known

console.log(names);

// Enums _-_ Enumerations

// enum Level { high, medium, low }

enum Cpoints {
  North = 3,
  East,
  South,
  West,
}


console.log(Cpoints.West);

