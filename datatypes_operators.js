// Exercise 1: Numbers
const integerNumber = 10;
const floatingNumber = 4.5;
const anotherNumber = 3;

const addition = integerNumber + anotherNumber;
const subtraction = integerNumber - anotherNumber;
const multiplication = integerNumber * anotherNumber;
const division = integerNumber / anotherNumber;
const modulus = integerNumber % anotherNumber;
const exponentiation = integerNumber ** anotherNumber;

console.log("Exercise 1: Numbers");
console.log("Integer number:", integerNumber);
console.log("Floating number:", floatingNumber);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Exercise 2: Boolean and Operators
const firstNumber = 15;
const secondNumber = 20;

const isGreaterThan = firstNumber > secondNumber;
const isLessThan = firstNumber < secondNumber;
const isEqualTo = firstNumber === secondNumber;

console.log("\nExercise 2: Boolean and Operators");
console.log("First number is greater than second number:", isGreaterThan);
console.log("First number is less than second number:", isLessThan);
console.log("First number is equal to second number:", isEqualTo);

const x = 8;
const y = 12;

console.log("x is greater than y:", x > y);
console.log("x is less than or equal to y:", x <= y);
console.log("x is equal to y:", x === y);
console.log("x is not equal to y:", x !== y);

const a = true;
const b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

let p = 10;

p += 5;
console.log("p after += 5:", p);

p -= 3;
console.log("p after -= 3:", p);

p *= 2;
console.log("p after *= 2:", p);

p /= 4;
console.log("p after /= 4:", p);

p %= 3;
console.log("p after %= 3:", p);
