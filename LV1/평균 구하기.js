function solution(arr) {
  let answer = 0;
  let all = 0;

  for (let i = 0; i < arr.length; i++) {
    all += arr[i];
  }
  return (answer = all / arr.length);
}
