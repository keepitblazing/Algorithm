function solution(arr) {
  return [].concat(...arr.map((num) => Array(num).fill(num)));
}
