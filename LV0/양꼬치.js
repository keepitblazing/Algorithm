function solution(n, k) {
  let service = Math.floor(n / 10);
  return service > 0 ? 12000 * n + 2000 * (k - service) : 12000 * n + 2000 * k;
}
