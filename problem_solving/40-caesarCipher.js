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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //26
  let newAlphabet = "";
  let criptedWord = "";
  let init = 0;
  if (k > 26) {
    const divisor = Math.floor(k / 26);
    init = k - divisor * 26;
  } else {
    init = k;
  }
  for (let i = init; i < alphabet.length; i++) {
    newAlphabet += alphabet[i];
  }
  for (let i = 0; i < init; i++) {
    newAlphabet += alphabet[i];
  }
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].toLowerCase();
    if (alphabet.indexOf(letter) !== -1) {
      const index = alphabet.indexOf(letter);
      if (s[i] !== letter) {
        const capitalLetter = newAlphabet[index].toUpperCase();
        criptedWord += capitalLetter;
      } else {
        criptedWord += newAlphabet[index];
      }
    } else {
      criptedWord += s[i];
    }
  }
  return criptedWord;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  const k = parseInt(readLine(), 10);

  let result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
