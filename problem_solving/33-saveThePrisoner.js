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

// Complete the saveThePrisoner function below.
//3 prisioneros  7 chcuches  3r puesto (va a ser el prisionero 9)
function saveThePrisoner(n, m, s) {
  const awfulChair = m + s - 1;
  if (awfulChair <= n) {
    return awfulChair;
  } else {
    const firstLap = n - s + 1;
    const temp = m - firstLap;
    const divisor = Math.floor(temp / n);
    console.log(divisor);
    const result = temp - divisor * n;

    if (result === 0) {
      return n;
    } else {
      return result;
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nms = readLine().split(" ");

    const n = parseInt(nms[0], 10);

    const m = parseInt(nms[1], 10);

    const s = parseInt(nms[2], 10);

    let result = saveThePrisoner(n, m, s);

    ws.write(result + "\n");
  }

  ws.end();
}
