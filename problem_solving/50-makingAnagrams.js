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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
  const firstArray = s1.split("");
  const secondArray = s2.split("");
  let tempArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (secondArray.indexOf(firstArray[i]) !== -1) {
      tempArray.push(firstArray[i]);
      const index = secondArray.indexOf(firstArray[i]);
      secondArray.splice(index, 1);
    }
  }
  let counter = s1.length - tempArray.length + (s2.length - tempArray.length);
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s1 = readLine();

  const s2 = readLine();

  let result = makingAnagrams(s1, s2);

  ws.write(result + "\n");

  ws.end();
}
