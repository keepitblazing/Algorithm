function solution(arr, flag) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let count = flag[i] ? arr[i] * 2 : -arr[i];
    for (let j = 0; j < Math.abs(count); j++) {
      count > 0 ? answer.push(arr[i]) : answer.pop();
    }
  }
  return answer;
}
g;
