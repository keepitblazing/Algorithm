function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  d = d.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}
