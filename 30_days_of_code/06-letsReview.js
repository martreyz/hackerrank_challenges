function processData(input) {
  let array = input.split("\n");
  for (let i = 1; i < array.length; i++) {
    let firstPart = "",
      secondPart = "";
    for (let j = 0; j < array[i].length; j++) {
      if (j % 2 === 0) {
        firstPart += array[i][j];
      } else if (j % 2 !== 0) {
        secondPart += array[i][j];
      }
    }
    console.log(firstPart, secondPart);
  }

  //Enter your code here
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
