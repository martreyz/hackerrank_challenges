"use strict";

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  const minimumSum = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
  const maximumSum = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
  console.log(minimumSum, maximumSum);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
