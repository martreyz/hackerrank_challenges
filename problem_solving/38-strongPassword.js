"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%^&*()-+";
  const lengthMinimum = 6 - n;
  let counter = 0;
  let validations = [false, false, false, false];
  const passwordArray = password.split("");
  for (let i = 0; i < passwordArray.length; i++) {
    if (numbers.includes(passwordArray[i])) {
      validations[0] = true;
    }
    if (lowerCase.includes(passwordArray[i])) {
      validations[1] = true;
    }
    if (upperCase.includes(passwordArray[i])) {
      validations[2] = true;
    }
    if (specialCharacters.includes(passwordArray[i])) {
      validations[3] = true;
    }
  }

  for (let i = 0; i < validations.length; i++) {
    if (!validations[i]) {
      counter++;
    }
  }
  return counter > lengthMinimum ? counter : lengthMinimum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const password = readLine();

  let answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
