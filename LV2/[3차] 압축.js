function solution(msg) {
  let alphabetArray = [];
  let answer = [];
  for (let i = 65; i <= 90; i++) {
    alphabetArray.push(String.fromCharCode(i));
  }

  for (let i = 0; i < msg.length; i++) {
    let temp = msg[i];
    let j = i + 1;
    while (j < msg.length && alphabetArray.includes(temp + msg[j])) {
      temp += msg[j];
      j++;
    }
    answer.push(alphabetArray.indexOf(temp) + 1);
    if (j < msg.length) {
      alphabetArray.push(temp + msg[j]);
    }
    i = j - 1;
  }
  return answer;
}
