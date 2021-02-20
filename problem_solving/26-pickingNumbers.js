"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  let resultSum = 0;
  let resultRest = 0;
  for (let i = 0; i < a.length; i++) {
    let counterSum = 1;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + 1 === a[j] || a[i] === a[j]) {
        counterSum++;
      }
    }
    if (counterSum > resultSum) {
      resultSum = counterSum;
    }
  }
  for (let i = 0; i < a.length; i++) {
    let counterRest = 1;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] - 1 === a[j] || a[i] === a[j]) {
        counterRest++;
      }
    }
    if (counterRest > resultRest) {
      resultRest = counterRest;
    }
  }
  if (resultRest > resultSum) {
    return resultRest;
  } else {
    return resultSum;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
