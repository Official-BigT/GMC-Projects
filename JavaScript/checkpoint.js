// Instructions

// 1.) String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
    console.log(reverseString(`hpmuirT`));

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}
    console.log(countCharacters(`Triumph`));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
    console.log(capitalizeWords(`hello world`));

// 2.) Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minMax(arr) {
    if (arr.length === 0) return []; // Handle empty array case (if needed)
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}
    console.log(minMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); // [1, 9]

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
    console.log(sum(1, 2, 3, 4, 5)); // 15

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}
    console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]

// 3.) Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
    console.log(factorial(5)); // 120

// Power Function: Create a function that calculates the power of a number raised to an exponent.
function power(base, exponent) {
    return Math.pow(base, exponent);
}
    console.log(power(2, 3)); // 8

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}
    console.log(isPrime(7)); // true

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
    console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





