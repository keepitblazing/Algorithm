function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  // fn[i] = 5^i + 5^(i-1) + ... + 5^0
  let fn = [0];
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    // fn[i] = fn[i-1] + 5^i
    sum += Math.pow(5, i);
    fn.push(sum);
  }

  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    // answer += (vowels.indexOf(word[i]) + 1) * fn[5 - i - 1];
    answer += vowels.indexOf(word[i]) * fn[5 - i] + 1;
  }

  return answer;
}
