// Task 1: Even or Odd Checker
const number = 7;
if (number % 2 === 0) {
  console.log("Task 1: That number is even.");
} else {
  console.log("Task 1: That number is odd.");
}

// Task 2: Grade Evaluator
const score = 82;
if (score >= 90 && score <= 100) {
  console.log("Task 2: You got an A!");
} else if (score >= 80) {
  console.log("Task 2: You got a B!");
} else if (score >= 70) {
  console.log("Task 2: You got a C!");
} else if (score >= 60) {
  console.log("Task 2: You got a D!");
} else {
  console.log("Task 2: You got an F!");
}

// Task 3: Compare Two Numbers
const num1_task3 = 5;
const num2_task3 = 8;

if (num1_task3 > num2_task3) {
  console.log("Task 3: First number is greater.");
} else if (num2_task3 > num1_task3) {
  console.log("Task 3: Second number is greater.");
} else {
  console.log("Task 3: Both numbers are equal.");
}

// Task 4: Voting Eligibility
const age = 16;
if (age >= 18) {
  console.log("Task 4: You can vote!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Task 4: You can vote in ${yearsLeft} years.`);
}

// Task 5: Basic Calculator
const num1_task5 = 10;
const num2_task5 = 5;
const operation = "*";

let result;
if (operation === "+") {
  result = num1_task5 + num2_task5;
} else if (operation === "-") {
  result = num1_task5 - num2_task5;
} else if (operation === "*") {
  result = num1_task5 * num2_task5;
} else if (operation === "/") {
  if (num2_task5 !== 0) {
    result = num1_task5 / num2_task5;
  } else {
    result = "Error! Division by zero.";
  }
} else {
  result = "Invalid operation!";
}

console.log("Task 5: Result:", result);
