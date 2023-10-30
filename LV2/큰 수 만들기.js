function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const current = number[i];
    while (stack.length > 0 && stack[stack.length - 1] < current && count < k) {
      stack.pop();
      count++;
    }
    stack.push(current);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}
