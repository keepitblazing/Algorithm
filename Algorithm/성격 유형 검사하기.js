function solution(survey, choices) {
  let answer = "";
  let list = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] < 4) {
      list[survey[i][0]] += (choices[i] - 4) * -1;
    } else if (choices[i] > 4) {
      list[survey[i][1]] += choices[i] - 4;
    }
  }
  const object = Object.keys(list);
  for (let j = 0; j < 8; j += 2) {
    if (list[object[j]] < list[object[j + 1]]) {
      answer += object[j + 1];
    } else {
      answer += object[j];
    }
  }
  return answer;
}
