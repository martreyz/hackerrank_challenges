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

// Complete the anagram function below.
function anagram(s) {
  let counter = 0;
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  if (s.length % 2 === 0) {
    const firstWord = s.slice(0, s.length / 2);
    const secondWord = s.slice(s.length / 2, s.length);
    let firstArray = [];
    let secondArray = [];
    for (let i = 0; i < firstWord.length; i++) {
      firstArray.push(alphabet[firstWord[i]]);
      secondArray.push(alphabet[secondWord[i]]);
    }
    firstArray.sort();
    secondArray.sort();
    for (let i = 0; i < firstArray.length; i++) {
      if (secondArray.indexOf(firstArray[i]) === -1) {
        counter++;
      } else {
        const index = secondArray.indexOf(firstArray[i]);
        secondArray.splice(index, 1);
      }
    }
  } else {
    counter = -1;
  }
  return counter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = anagram(s);

    ws.write(result + "\n");
  }

  ws.end();
}
