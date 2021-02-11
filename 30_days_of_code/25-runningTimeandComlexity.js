function processData(input) {
  //Enter your code here
  const inputArray = input.split("\n");
  let result;

  for (let i = 1; i < inputArray.length; i++) {
    result = true;
    if (inputArray[i] == 1) {
      result = false;
    }

    if (inputArray[i].length <= 3) {
      for (let j = 2; j <= parseInt(inputArray[i]) / 2; j++) {
        if (parseInt(inputArray[i]) % j === 0) {
          result = false;
          j = inputArray[i] / 2;
        }
      }
    } else {
      for (let j = 2; j * j <= parseInt(inputArray[i]) / 2; j++) {
        if (parseInt(inputArray[i]) % j === 0) {
          result = false;
          j = inputArray[i] / 2;
        }
      }
    }

    if (result) {
      console.log("Prime");
    } else {
      console.log("Not prime");
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
