function solution(n) {
  let prev = 0;
  let curr = 1;
  const mod = 1234567;
  for (let i = 2; i <= n; i++) {
    let temp = (prev + curr) % mod;
    prev = curr;
    curr = temp;
  }
  return curr;
}
