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

// Complete the permutationEquation function below.
function permutationEquation(p) {
  let results = [];
  for (let i = 1; i <= p.length; i++) {
    const firstIndex = p.indexOf(i) + 1;
    const secondIndex = p.indexOf(firstIndex) + 1;
    results.push(secondIndex);
  }
  return results;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = readLine()
    .split(" ")
    .map((pTemp) => parseInt(pTemp, 10));

  let result = permutationEquation(p);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
