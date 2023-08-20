function solution(names) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < names.length; i++) {
    count++;
    if (count === 1) {
      answer.push(names[i]);
    }
    if (count === 5) {
      count = 0;
    }
  }
  return answer;
}
