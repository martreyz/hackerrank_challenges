"use strict";

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

function main() {
  var n = parseInt(readLine()).toString(2);
  var numbers = n.split("0");
  console.log(
    numbers
      .map((number) => {
        return number.length;
      })
      .reduce((a, b) => {
        if (a > b) return a;
        else return b;
      })
  );
}
