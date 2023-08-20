function solution(arr, intervals) {
  let answer = [];
  for (let i = 0; i < intervals.length; i++) {
    let newArr = arr.slice(intervals[i][0], intervals[i][1] + 1);
    for (let j = 0; j < newArr.length; j++) {
      answer.push(newArr[j]);
    }
  }
  return answer;
}
