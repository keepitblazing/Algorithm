function solution(my_string, is_suffix) {
  if (my_string === is_suffix) return 1;
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
