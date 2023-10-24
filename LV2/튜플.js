function solution(s) {
  let tuples = s.replace(/{/g, "[").replace(/}/g, "]");
  tuples = JSON.parse(tuples);
  tuples.sort((a, b) => a.length - b.length);

  let answer = [];

  for (let i = 0; i < tuples.length; i++) {
    for (let j = 0; j < tuples[i].length; j++) {
      let num = tuples[i][j];
      if (answer.indexOf(num) === -1) {
        answer.push(num);
      }
    }
  }

  return answer;
}
