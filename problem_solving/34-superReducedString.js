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

// Complete the superReducedString function below.
function superReducedString(s) {
  const sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === sArray[i + 1]) {
      sArray.splice(i, 2);
      i--;
    } else if (sArray[i] === sArray[i - 1]) {
      sArray.splice(i - 1, 2);
      i -= 2;
    }
  }
  let result = "";
  if (sArray.length !== 0) {
    for (let i = 0; i < sArray.length; i++) {
      result += sArray[i];
    }
  } else {
    result = "Empty String";
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = superReducedString(s);

  ws.write(result + "\n");

  ws.end();
}
