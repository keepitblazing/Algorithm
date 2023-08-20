const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let a = "";
  const bigStr = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === bigStr[i]) {
      a += str[i].toLowerCase();
    } else {
      a += bigStr[i];
    }
  }
  console.log(a);
});
