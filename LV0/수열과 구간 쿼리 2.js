function solution(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let newArr = [...arr].filter(
      (v, idx) => idx >= queries[i][0] && idx <= queries[i][1]
    );
    const filtered = newArr.filter((v) => v > queries[i][2]);
    answer.push(filtered.length ? Math.min(...filtered) : -1);
  }
  return answer;
}
