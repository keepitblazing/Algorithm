function solution(s) {
  let answer = 0;
  a = parseInt(s);
  if (a - a == 0) {
    answer = a;
  } else {
    answer = -a;
  }

  return answer;
}
