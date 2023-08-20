function solution(numLog) {
  let answer = "";
  let startNum = numLog[0];

  for (let i = 1; i < numLog.length; i++) {
    let control = (startNum - numLog[i]) * -1;
    if (control === 1) {
      answer += "w";
    } else if (control === -1) {
      answer += "s";
    } else if (control === 10) {
      answer += "d";
    } else if (control === -10) {
      answer += "a";
    }
    startNum = numLog[i];
  }
  return answer;
}
