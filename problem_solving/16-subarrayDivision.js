"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(s, d, m) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    let counterChocolate = 0;
    for (let j = 0; j < m; j++) {
      let index = i + j;
      let bars = parseInt(s[index]);
      counterChocolate += bars;
    }
    if (counterChocolate === d) {
      counter += 1;
    }
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const dm = readLine().replace(/\s+$/g, "").split(" ");

  const d = parseInt(dm[0], 10);

  const m = parseInt(dm[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}
