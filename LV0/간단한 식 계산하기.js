function solution(binomial) {
  binomial = binomial.split(" ");
  let first = parseInt(binomial[0]);
  let second = binomial[1];
  let third = parseInt(binomial[2]);
  switch (second) {
    case "+":
      return first + third;
    case "-":
      return first - third;
    case "*":
      return first * third;
    case "/":
      return first / third;
  }
}
