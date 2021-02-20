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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const wordArray = word.split("");
  let resultsArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    const index = alphabet.indexOf(wordArray[i]);
    resultsArray.push(h[index]);
  }
  resultsArray.sort();
  return resultsArray[resultsArray.length - 1] * resultsArray.length;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = readLine()
    .split(" ")
    .map((hTemp) => parseInt(hTemp, 10));

  const word = readLine();

  let result = designerPdfViewer(h, word);

  ws.write(result + "\n");

  ws.end();
}
