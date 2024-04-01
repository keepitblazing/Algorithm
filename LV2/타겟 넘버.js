function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(x, v) {
    if (x < numbers.length) {
      getAnswer(x + 1, v + numbers[x]);
      getAnswer(x + 1, v - numbers[x]);
    } else {
      if (v === target) {
        answer++;
      }
    }
  }
  return answer;
}
