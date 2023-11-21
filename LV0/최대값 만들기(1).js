function solution(numbers) {
  let a = numbers.sort((a, b) => b - a);
  return a[0] * a[1];
}
