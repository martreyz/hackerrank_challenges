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
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  /*
   * Write your code here.
   */
  const middle = n / 2;
  if (p === n || p === 1) {
    return 0;
  } else if (p < middle) {
    return Math.round((p - 1) / 2);
  } else if (p > middle) {
    if (n % 2 === 0) {
      if (n - p < 1) {
        return 0;
      } else {
        return Math.round((n - p) / 2);
      }
    } else {
      return Math.round((n - 1 - p) / 2);
    }
  } else if (p === middle) {
    if (n % 2 === 0) {
      if (n - p < 2) {
        return 0;
      } else {
        return Math.round(p / 2 - 1);
      }
    } else {
      return Math.round((n - 1 - p) / 2);
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = parseInt(readLine(), 10);

  let result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
