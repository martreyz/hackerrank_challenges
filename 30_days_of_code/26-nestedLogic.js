function processData(input) {
  const datesArray = input.split(" ");
  const datesArrayTwo = datesArray[2].split("\n");
  const returnedDay = parseInt(datesArray[0]);
  const returnedMonth = parseInt(datesArray[1]);
  const returnedYear = parseInt(datesArrayTwo[0]);
  const dueDay = parseInt(datesArrayTwo[1]);
  const dueMonth = parseInt(datesArray[3]);
  const dueYear = parseInt(datesArray[4]);
  if (
    returnedDay > dueDay &&
    returnedMonth === dueMonth &&
    returnedYear === dueYear
  ) {
    const fine = (returnedDay - dueDay) * 15;
    console.log(fine);
  } else if (returnedMonth > dueMonth && returnedYear === dueYear) {
    const fine = (returnedMonth - dueMonth) * 500;
    console.log(fine);
  } else if (returnedYear > dueYear) {
    console.log("10000");
  } else {
    console.log("0");
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
