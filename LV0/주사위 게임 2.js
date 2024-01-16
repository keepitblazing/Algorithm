function solution(a, b, c) {
  let sum = a + b + c;
  let sumOfSquares = a * a + b * b + c * c;
  let sumOfCubes = a * a * a + b * b * b + c * c * c;

  if (a !== b && b !== c && a !== c) {
    return sum;
  } else if (a === b && b === c) {
    return sum * sumOfSquares * sumOfCubes;
  } else {
    return sum * sumOfSquares;
  }
}
