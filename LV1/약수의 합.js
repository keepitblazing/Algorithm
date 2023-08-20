function solution(n) {
  let a = [];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    n % i === 0 ? a.push(i) : a;
  }

  for (let i = 0; i < a.length; i++) {
    answer += a[i];
  }

  return answer;
}
