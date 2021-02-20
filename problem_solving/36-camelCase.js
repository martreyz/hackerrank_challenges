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

// Complete the camelcase function below.
function camelcase(s) {
  const sArray = s.split("");

  let counter = 1;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === sArray[i].toUpperCase()) {
      counter++;
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}
