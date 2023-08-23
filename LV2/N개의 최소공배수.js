function solution(arr) {
  return arr.reduce((acc, cur) => {
    let a = acc,
      b = cur;
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    const gcd = a;
    return (acc * cur) / gcd;
  });
}
