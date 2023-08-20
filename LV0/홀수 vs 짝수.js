function solution(num_list) {
  return Math.max(
    num_list.reduce((acc, cur, idx) => (idx % 2 === 0 ? acc + cur : acc), 0),
    num_list.reduce((acc, cur, idx) => (idx % 2 !== 0 ? acc + cur : acc), 0)
  );
}
