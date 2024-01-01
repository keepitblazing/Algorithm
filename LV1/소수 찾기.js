function solution(n) {
  let sieve = new Array(n + 1).fill(true);
  let m = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= m; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) count++;
  }
  return count;
}
