function solution(my_string) {
  let answer = Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    let code = my_string.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      answer[code - 65]++;
    } else if (code >= 97 && code <= 122) {
      answer[code - 97 + 26]++;
    }
  }
  return answer;
}
