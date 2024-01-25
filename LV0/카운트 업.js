function solution(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);
}

// function solution(start, end) {
//   let answer = [];
//   for (let i = start; i < end + 1; i++) {
//     answer.push(i);
//   }
//   return answer;
// }
