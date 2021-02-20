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

// Complete the alternate function below.
function alternate(s) {
  let counter = 0;
  let tempCounter = 0;
  let sArray = s.split("");
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const trial = sArray.filter(onlyUnique);
  for (let i = 0; i < trial.length; i++) {
    for (let x = i + 1; x < trial.length; x++) {
      const characterArray = sArray.filter(
        (item) => item === trial[i] || item === trial[x]
      );
      let handler = true;
      for (let j = 0; j < characterArray.length; j++) {
        if (characterArray[j] === characterArray[j + 1]) {
          handler = false;
          j = characterArray.length;
        }
      }
      if (handler) {
        tempCounter = characterArray.length;
        if (tempCounter > counter) {
          counter = tempCounter;
        }
      }
    }
  }

  if (sArray.length < 2) {
    return 0;
  } else {
    return counter;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const s = readLine();

  const result = alternate(s);

  ws.write(result + "\n");

  ws.end();
}
