function solution(arr, query) {
  return query.reduce(
    (acc, cur, i) => (i % 2 === 0 ? acc.slice(0, cur + 1) : acc.slice(cur)),
    arr
  );
}

// function solution(arr, query) {
//   let result = arr;
//   for (let i = 0; i < query.length; i++) {
//     if (i === 0 || i % 2 === 0) {
//       result = result.slice(0, query[i] + 1);
//     } else {
//       result = result.slice(query[i]);
//     }
//   }
//   return result;
// }
