const fs = require("fs");
const readline = require("readline");

// Exercise 1: Temperature check
const temperature = 18;

console.log("Exercise 1: Temperature check using if else");

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature <= 15) {
  console.log("It's cold.");
} else if (temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

console.log("\nExercise 1: Temperature check using switch");

switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

// Exercise 2: Divisibility Check
const numberToCheck = 12;

console.log("\nExercise 2: Divisibility Check using if else");

if (numberToCheck % 2 === 0 && numberToCheck % 3 === 0) {
  console.log("Divisible by both.");
} else if (numberToCheck % 2 === 0) {
  console.log("Divisible by 2.");
} else if (numberToCheck % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

console.log("\nExercise 2: Divisibility Check using switch");

switch (true) {
  case numberToCheck % 2 === 0 && numberToCheck % 3 === 0:
    console.log("Divisible by both.");
    break;
  case numberToCheck % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case numberToCheck % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
console.log("\nExercise 3: For loops");

console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let forLoopSum = 0;
for (let i = 1; i <= 100; i++) {
  forLoopSum += i;
}
console.log("Sum of numbers from 1 to 100:", forLoopSum);

const numbers = [1, 2, 3, 4, 5];
console.log("Each element in numbers:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const values = [3, 7, 2, 5, 10, 6];
let largestNumber = values[0];

for (let i = 1; i < values.length; i++) {
  if (values[i] > largestNumber) {
    largestNumber = values[i];
  }
}
console.log("Largest number:", largestNumber);

// Exercise 4: While loops
console.log("\nExercise 4: While loops");

console.log("Numbers from 1 to 10:");
let whileCounter = 1;
while (whileCounter <= 10) {
  console.log(whileCounter);
  whileCounter++;
}

console.log("Even numbers between 1 and 20:");
let evenCounter = 1;
while (evenCounter <= 20) {
  if (evenCounter % 2 === 0) {
    console.log(evenCounter);
  }
  evenCounter++;
}

let whileLoopSum = 0;
let sumCounter = 1;
while (sumCounter <= 100) {
  whileLoopSum += sumCounter;
  sumCounter++;
}
console.log("Sum of numbers from 1 to 100:", whileLoopSum);

console.log("Multiples of 5 less than 50:");
let multiple = 5;
while (multiple < 50) {
  console.log(multiple);
  multiple += 5;
}

// Exercise 5: Do While loops
console.log("\nExercise 5: Do While loops");

console.log("Numbers from 1 to 10:");
let doWhileCounter = 1;
do {
  console.log(doWhileCounter);
  doWhileCounter++;
} while (doWhileCounter <= 10);

let doWhileSum = 0;
let doWhileSumCounter = 1;
do {
  doWhileSum += doWhileSumCounter;
  doWhileSumCounter++;
} while (doWhileSumCounter <= 100);
console.log("Sum of numbers from 1 to 100:", doWhileSum);

const inputValues = process.stdin.isTTY
  ? []
  : fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const rl = process.stdin.isTTY
  ? readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  : null;

function ask(question) {
  if (!process.stdin.isTTY) {
    const answer = inputValues.shift() ?? "";
    console.log(`${question}${answer}`);
    return Promise.resolve(answer);
  }

  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function runPromptExercises() {
  let userNumber;

  do {
    userNumber = Number(await ask("Enter a number greater than 10: "));
  } while (Number.isNaN(userNumber) || userNumber <= 10);

  console.log("Valid number entered:", userNumber);

  const secretNumber = 7;
  let guess;

  do {
    guess = Number(await ask("Guess a number between 1 and 10: "));

    if (guess !== secretNumber) {
      console.log("Incorrect guess. Try again.");
    }
  } while (guess !== secretNumber);

  console.log("Correct guess!");

  if (rl) {
    rl.close();
  }
}

runPromptExercises();
