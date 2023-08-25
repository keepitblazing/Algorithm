function solution(myString, pat) {
  let answer = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    let substring = myString.substring(i, i + pat.length);
    if (substring === pat) {
      answer++;
    }
  }

  return answer;
}
