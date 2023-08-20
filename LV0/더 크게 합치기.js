function solution(a, b) {
  let ab = Number(String(a) + String(b));
  let ba = Number(String(b) + String(a));

  return ab > ba ? ab : ba;
}
