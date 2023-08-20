function solution(n, words) {
  let wordSet = new Set();

  for (let i = 0; i < words.length; i++) {
    // i % n + 1 : 사람 번호
    // Math.ceil((i + 1) / n) : 차례
    let answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
    // 끝말잇기가 틀렸을 때
    if (i > 0 && words[i - 1].slice(-1) !== words[i][0]) {
      return answer;
    }
    // 이미 말한 단어를 말했을 때
    if (wordSet.has(words[i])) {
      return answer;
    }
    // 끝말잇기가 틀리지 않았을 때
    wordSet.add(words[i]);
  }
  return [0, 0];
}
