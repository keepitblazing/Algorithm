function solution(my_string, overwrite_string, s) {
  let answer = [];

  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string[i]);
  }

  answer.splice(s, overwrite_string.length, overwrite_string);

  let a = "";
  for (let i = 0; i < answer.length; i++) {
    a += answer[i];
  }

  return a;
}
