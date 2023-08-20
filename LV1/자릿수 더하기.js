function solution(n) {
  let n2 = String(n);
  let answer = 0;

  for (let i = 0; i < n2.length; i++) {
    answer += parseInt(n2[i]);
  }

  return answer;
}
