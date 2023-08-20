function solution(num_list, n) {
  return num_list
    .map((v, i) => (i === 0 || i % n === 0 ? v : ""))
    .filter((a) => a !== "");
}
