function solution(my_string) {
  return Array.from({ length: my_string.length }, (_, i) =>
    my_string.slice(i)
  ).sort();
}
