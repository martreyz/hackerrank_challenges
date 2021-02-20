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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
  const hackerrank = "hackerrank";
  let index = 0;
  let newWord = "";
  for (let i = 0; i < hackerrank.length; i++) {
    for (let j = index; j < s.length; j++) {
      if (hackerrank[i] === s[j]) {
        newWord += s[j];
        index = j + 1;
        j = s.length;
      }
    }
  }
  console.log(newWord);
  if (newWord === "hackerrank") {
    return "YES";
  } else {
    return "NO";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = hackerrankInString(s);

    ws.write(result + "\n");
  }

  ws.end();
}
