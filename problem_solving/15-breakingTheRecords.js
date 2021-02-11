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

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let min = scores[0],
    max = scores[0];
  let minCounter = 0,
    maxCounter = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      min = scores[i];
      minCounter++;
    } else if (scores[i] > max) {
      max = scores[i];
      maxCounter++;
    }
  }
  const resultsArray = [maxCounter, minCounter];
  return resultsArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map((scoresTemp) => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
