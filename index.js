"use strict";
function getValidNumberInput(promptMessage) {
  while (true) {
    const input = prompt(promptMessage);

    if (input === null) {
      return null;
    }

    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    } else {
      alert("Error: Input valid number, please!");
    }
  }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const input = prompt(promptMessage);

    if (input === null) {
      return null;
    }

    if (validOperators.includes(input.trim())) {
      return input.trim();
    } else {
      alert(
        `Error: Please enter a valid operator (${validOperators.join(", ")})`
      );
    }
  }
}

function calculatorWithInput() {
  console.log("=== Simple Calculator ===");

  const num1 = getValidNumberInput("Enter the first number:");
  if (num1 === null) {
    console.log("Operation cancelled by user.");
    return;
  }

  const num2 = getValidNumberInput("Enter the second number:");
  if (num2 === null) {
    console.log("Operation cancelled by user.");
    return;
  }

  const operator = getValidOperatorInput("Enter operator (+, -, *, /, %, **):");
  if (operator === null) {
    console.log("Operation cancelled by user.");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = Math.pow(num1, num2);
      break;
    default:
      result = "Error: Invalid operator";
  }

  console.log(`Calculation: ${num1} ${operator} ${num2} = ${result}`);
  alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
  return result;
}

function dataAnalyzerWithInput() {
  console.log("\n=== Basic Data Analyzer ===");

  const count = getValidNumberInput("How many numbers do you want to analyze?");
  if (count === null || count <= 0) {
    console.log("Operation cancelled or invalid count.");
    return;
  }

  const numbers = [];
  for (let i = 0; i < count; i++) {
    const number = getValidNumberInput(`Enter number ${i + 1}:`);
    if (number === null) {
      console.log("Operation cancelled by user.");
      return;
    }
    numbers.push(number);
  }

  const analysis = analyzeData(numbers);
  console.log("Dataset:", numbers);
  console.log("Analysis:", analysis);

  alert(`Data Analysis Results:\n
Numbers: ${numbers.join(", ")}
Sum: ${analysis.sum}
Average: ${analysis.average}
Min: ${analysis.min}
Max: ${analysis.max}`);
}

function analyzeData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "Error: Invalid data input";
  }

  const sum = data.reduce((acc, val) => acc + val, 0);
  const average = sum / data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);

  return {
    sum,
    average: Number(average.toFixed(2)),
    min,
    max,
  };
}

// Menu
function showMenu() {
  while (true) {
    const choice = prompt(`Please choice the Option:
1. Simple Calculator - The Version of Boocamp WPH batch Donat
2. Data Analyzer - The version of Boocamp WPH batch Donat
3. Exit

Please Choice (1-3):`);

    switch (choice) {
      case "1":
        calculatorWithInput();
        break;
      case "2":
        dataAnalyzerWithInput();
        break;
      case "3":
        console.log("Goodbye!");
        return;
      case null:
        console.log("Operation cancelled. Goodbye!");
        return;
      default:
        alert("Invalid choice! Please enter 1, 2, or 3.");
    }
  }
}

function runDemo() {
  console.log("=== Auto Demo Mode ===");

  // Demo Calculator
  console.log("Calculator Demo:");
  console.log("5 + 3 =", calculator(5, 3, "+"));
  console.log("10 / 2 =", calculator(10, 2, "/"));
  console.log("7 * 0 =", calculator(7, 0, "*"));
  console.log("4 - 9 =", calculator(4, 9, "-"));
  console.log("5 / 0 =", calculator(5, 0, "/"));
  console.log("2 ** 3 =", calculator(2, 3, "**"));
  console.log("10 % 3 =", calculator(10, 3, "%"));

  console.log("\nData Analysis Demo:");
  const dataset = [12, 45, 7, 23, 56, 89, 3];
  const analysis = analyzeData(dataset);
  console.log("Dataset:", dataset);
  console.log("Analysis:", analysis);
}

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "**":
      return Math.pow(num1, num2);
    default:
      return "Error: Invalid operator";
  }
}

console.log("=== Challenge-3-buntoro7 Calculator & Data Analyzer ===");
console.log("Running in browser environment...");
showMenu();
