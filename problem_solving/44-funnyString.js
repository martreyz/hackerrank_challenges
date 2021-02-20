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

// Complete the funnyString function below.
function funnyString(s) {
  const alphabet = {
    a: 97,
    b: 98,
    c: 99,
    d: 100,
    e: 101,
    f: 102,
    g: 103,
    h: 104,
    i: 105,
    j: 106,
    k: 107,
    l: 108,
    m: 109,
    n: 110,
    o: 111,
    p: 112,
    q: 113,
    r: 114,
    s: 115,
    t: 116,
    u: 117,
    v: 118,
    w: 119,
    x: 120,
    y: 121,
    z: 122,
  };
  let numericS = [];
  let reversedNumericS = [];
  let keeper = "Funny";
  for (let i = 0; i < s.length; i++) {
    numericS.push(alphabet[s[i]]);
  }
  for (let i = numericS.length - 1; i >= 0; i--) {
    reversedNumericS.push(numericS[i]);
  }
  for (let i = 0; i < numericS.length - 1; i++) {
    let numericSDifference = Math.abs(numericS[i] - numericS[i + 1]);
    let reversedSDifference = Math.abs(
      reversedNumericS[i] - reversedNumericS[i + 1]
    );
    console.log(numericSDifference, reversedSDifference);
    if (numericSDifference !== reversedSDifference) {
      keeper = "Not Funny";
    }
  }
  return keeper;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = funnyString(s);

    ws.write(result + "\n");
  }

  ws.end();
}
