function solution(numbers, n) {
  return numbers.reduce((acc, cur) => {
    if (acc > n) return acc;
    return acc + cur;
  }, 0);
}
