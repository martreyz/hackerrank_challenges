"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (brr.indexOf(arr[i]) !== -1) {
      const index = brr.indexOf(arr[i]);
      brr.splice(index, 1);
    }
  }

  brr.sort((a, b) => a - b);
  for (let i = 0; i < brr.length; i++) {
    if (brr[i] === brr[i + 1]) {
      brr.splice(i, 1);
    }
  }
  return brr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const m = parseInt(readLine(), 10);

  const brr = readLine()
    .split(" ")
    .map((brrTemp) => parseInt(brrTemp, 10));

  const result = missingNumbers(arr, brr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
