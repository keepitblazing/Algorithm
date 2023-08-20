function solution(my_string, queries) {
  let newMyString = [...my_string];

  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0];
    let end = queries[i][1];

    for (let j = 0; j < Math.floor((end - start + 1) / 2); j++) {
      let temp = newMyString[start + j];
      newMyString[start + j] = newMyString[end - j];
      newMyString[end - j] = temp;
    }
  }

  return newMyString.join("");
}
