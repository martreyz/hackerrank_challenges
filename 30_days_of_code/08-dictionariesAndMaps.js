function processData(input) {
  //Enter your code here
  let phoneBook = {};
  const arrayInput = input.split("\n");
  for (let i = 1; i < arrayInput.length; i++) {
    if (arrayInput[i].includes(" ")) {
      const data = arrayInput[i].split(" ");
      phoneBook[data[0]] = data[1];
    } else {
      if (phoneBook[arrayInput[i]]) {
        console.log(arrayInput[i] + "=" + phoneBook[arrayInput[i]]);
      } else {
        console.log("Not found");
      }
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
