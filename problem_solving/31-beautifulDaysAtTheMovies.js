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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  let beautifulDays = 0;
  for (let x = i; x <= j; x++) {
    const reversedArray = x.toString().split("").reverse();
    let reversedString = "";
    for (let i = 0; i < reversedArray.length; i++) {
      reversedString += reversedArray[i];
    }
    const reversedNumber = parseInt(reversedString);
    const difference = Math.abs(x - reversedNumber);
    if (difference % k === 0 || difference === 0) {
      beautifulDays++;
    }
  }
  return beautifulDays;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const ijk = readLine().split(" ");

  const i = parseInt(ijk[0], 10);

  const j = parseInt(ijk[1], 10);

  const k = parseInt(ijk[2], 10);

  let result = beautifulDays(i, j, k);

  ws.write(result + "\n");

  ws.end();
}
