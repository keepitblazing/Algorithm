function solution(my_string, m, c) {
  if (c > m) return "";
  let result = "";
  for (let i = 0; i < my_string.length; i += m) {
    if (i + c <= my_string.length) {
      result += my_string[i + c - 1];
    }
  }
  return result;
}
