function solution(n) {
  let change = n.toString(3).split("").reverse().join("");
  let answer = parseInt(change, 3);
  return answer;
}
