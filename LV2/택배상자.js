function solution(order) {
  let stack = []; //보조 컨테이너
  let count = 0;
  let currentIndex = 0;

  for (let i = 1; i <= order.length; i++) {
    if (i === order[currentIndex]) {
      count++;
      currentIndex++;
      while (
        stack.length > 0 &&
        stack[stack.length - 1] === order[currentIndex]
      ) {
        stack.pop();
        count++;
        currentIndex++;
      }
    } else {
      stack.push(i);
    }
  }

  return count;
}
