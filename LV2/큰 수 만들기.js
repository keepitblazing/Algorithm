function solution(number, k) {
  const stack = [];
  for (let num of number) {
    while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
      stack.pop();
      k -= 1;
    }
    stack.push(num);
  }

  stack.splice(stack.length - k, k);
  return stack.join("");
}

// function solution(number, k) {
//   const stack = [];
//   let count = 0;

//   for (let i = 0; i < number.length; i++) {
//     const current = number[i];
//     while (stack.length > 0 && stack[stack.length - 1] < current && count < k) {
//       stack.pop();
//       count++;
//     }
//     stack.push(current);
//   }

//   while (count < k) {
//     stack.pop();
//     count++;
//   }

//   return stack.join("");
// }
