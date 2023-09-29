function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => -1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      let lastIndex = stack.pop();
      answer[lastIndex] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}
