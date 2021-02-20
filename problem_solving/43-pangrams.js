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

// Complete the pangrams function below.
function pangrams(s) {
  let isPangram = true;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i].toUpperCase();
    if (s.indexOf(alphabet[i]) === -1 && s.indexOf(letter) === -1) {
      isPangram = false;
    }
  }
  if (isPangram) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = pangrams(s);

  ws.write(result + "\n");

  ws.end();
}
