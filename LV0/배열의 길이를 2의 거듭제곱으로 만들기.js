function solution(arr) {
  let targetLength = 1;
  while (targetLength < arr.length) {
    targetLength *= 2;
  }
  while (arr.length < targetLength) {
    arr.push(0);
  }
  return arr;
}
