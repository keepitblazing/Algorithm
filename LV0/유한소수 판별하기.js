function solution(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const gcdValue = gcd(a, b);
  let answer = b / gcdValue;

  while (answer % 2 === 0) {
    answer /= 2;
  }

  while (answer % 5 === 0) {
    answer /= 5;
  }

  return answer === 1 ? 1 : 2;
}
