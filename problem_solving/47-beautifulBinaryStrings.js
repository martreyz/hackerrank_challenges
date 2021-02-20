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

// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
  let counter = 0;
  const bArray = b.split("");
  for (let i = 0; i < bArray.length; i++) {
    if (bArray[i] === "0" && bArray[i + 1] === "1" && bArray[i + 2] === "0") {
      const saver = bArray[i + 2];
      bArray[i + 2] = "1";
      counter++;
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const b = readLine();

  let result = beautifulBinaryString(b);

  ws.write(result + "\n");

  ws.end();
}
