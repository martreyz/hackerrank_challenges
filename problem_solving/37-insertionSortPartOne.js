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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
  let newArr = [...arr];
  newArr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = newArr[i];
    console.log(...arr);
    let keeper = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== newArr[j]) {
        keeper = false;
      }
    }
    if (keeper) {
      i = 0;
    }
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  insertionSort1(n, arr);
}
