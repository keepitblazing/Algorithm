function solution(s) {
  let c = Array.from(s).sort().reverse().join("");
  return c;
}