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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  const time = s.substr(s.length - 2, 2);
  let result;
  if (time === "AM") {
    const hour = parseInt(s.substr(0, 2));
    if (hour === 12) {
      result = "00" + s.substr(2, 6);
    } else {
      result = s.substr(0, 8);
    }
  } else if (time === "PM") {
    const hour = parseInt(s.substr(0, 2));
    if (hour === 12) {
      result = s.substr(0, 8);
    } else {
      const realHour = hour + 12;
      result = realHour + s.substr(2, 6);
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
