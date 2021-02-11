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

// Complete the staircase function below.
function staircase(n) {
  const staircaseArray = [];
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - (i + 1));
    const hash = "#".repeat(i + 1);
    const string = spaces + hash;
    console.log(string);
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
