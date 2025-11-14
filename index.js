"use strict";

// Import prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

/* ===========================================
1. User Input Handling
=========================================== */

// Get valid number
function getValidNumberInput(promptMessage) {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);
    const numberValue = Number(userInput);

    if (!isNaN(numberValue)) {
      return numberValue;
    }

    console.log("Input tidak valid! Masukkan angka yang benar.\n");
  }
}

// Get valid operator
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let operator;

  while (true) {
    operator = prompt(promptMessage);

    if (validOperators.includes(operator)) {
      return operator;
    }

    console.log("Operator tidak valid! Pilih salah satu: +, -, *, /, %, **\n");
  }
}

/* ===========================================
2. Basic Arithmetic Operation (Functions and Operators)
=========================================== */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

/* ===========================================
3. Main Calculator Logic (Switch & If/Else)
=========================================== */

while (true) {
  console.log("\n=== SIMPLE WPH BATCH DONAT CALCULATOR ===");

  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const operator = getValidOperatorInput(
    "Masukkan operator (+, -, *, /, %, **): "
  );
  const num2 = getValidNumberInput("Masukkan angka kedua: ");

  let result;

  // SWITCH for choosing operation
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  console.log(`\nHasil: ${result}`);

  /* ===========================================
    4. Data Type Analysis & Conditional Output
    =========================================== */

  const resultType = typeof result;
  console.log(`Tipe data hasil: ${resultType}`);

  // If result is number
  if (resultType === "number") {
    // Positive / Negative / Zero
    if (result > 0) {
      console.log("Nilai positif.");
    } else if (result < 0) {
      console.log("Nilai negatif.");
    } else {
      console.log("Nilai nol.");
    }

    // Integer or Float
    if (Number.isInteger(result)) {
      console.log("Tipe angka: Integer");
    } else {
      console.log("Tipe angka: Float");
    }

    // Even or Odd (ternary)
    console.log(result % 2 === 0 ? "Angka Genap (Even)" : "Angka Ganjil (Odd)");

    // Example of logical operator: positive AND even
    if (result > 0 && result % 2 === 0) {
      console.log("Catatan: Angka ini positif DAN genap (menggunakan &&).");
    }
  } else if (resultType === "string") {
    // Error message
    console.log("Pesan error:", result);
  } else {
    // Nullish Coalescing
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  /* ===========================================
    5. Exit Mechanism (Loops & Conditionals)
    =========================================== */

  const continueCalc = prompt("\nHitung lagi? (yes/no): ").toLowerCase();

  if (continueCalc === "no") {
    console.log("Program selesai. Terima kasih!");
    break;
  }
}
