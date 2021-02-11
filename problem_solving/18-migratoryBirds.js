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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  let birdType;
  let counterBirds = 0;
  const passedBirds = [];
  for (let i = 0; i < arr.length; i++) {
    if (passedBirds.indexOf(arr[i]) === -1) {
      passedBirds.push(arr[i]);
      let bird = arr[i];
      let result = arr.filter((item) => item === arr[i]).length;
      if (result > counterBirds) {
        birdType = bird;
        counterBirds = result;
      } else if (result === counterBirds && birdType > bird) {
        birdType = bird;
        counterBirds = result;
      }
    }
  }
  return birdType;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
