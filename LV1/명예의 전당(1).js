function solution(k, score) {
  let answer = [];
  for (let i = 1; i < score.length + 1; i++) {
    if (i >= k) {
      answer.push(
        score
          .slice(0, i)
          .sort((a, b) => b - a)
          .slice(0, k)[k - 1]
      );
    } else {
      answer.push(Math.min(...score.slice(0, i)));
    }
  }
  return answer;
}
