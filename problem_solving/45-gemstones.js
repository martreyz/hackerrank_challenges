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

// Complete the gemstones function below.
function gemstones(arr) {
  let counter = 0;
  let keeper = "";
  let passedValidations = [];
  for (let j = 0; j < arr[0].length; j++) {
    if (passedValidations.indexOf(arr[0][j]) === -1) {
      let isGemstone = true;
      keeper = arr[0][j];
      for (let x = 0; x < arr.length; x++) {
        if (!arr[x].includes(keeper)) {
          isGemstone = false;
          x = arr.length;
        }
      }
      if (isGemstone) {
        console.log(keeper);
        counter++;
      }
      passedValidations.push(arr[0][j]);
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let arr = [];

  for (let i = 0; i < n; i++) {
    const arrItem = readLine();
    arr.push(arrItem);
  }

  let result = gemstones(arr);

  ws.write(result + "\n");

  ws.end();
}
