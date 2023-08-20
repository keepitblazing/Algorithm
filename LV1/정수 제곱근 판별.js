function solution(n) {
  let answer = 0;
  let a = Math.sqrt(n);

  if (a % 1 === 0) {
    answer = (a + 1) * (a + 1);
  } else {
    answer = -1;
  }
  return answer;
}
