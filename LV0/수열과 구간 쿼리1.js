function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    for (let j = start; j <= end; j++) {
      if (j < arr.length) {
        arr[j]++;
      }
    }
  }
  return arr;
}
