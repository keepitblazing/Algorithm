function solution(my_string, s, e) {
  let arr = my_string.split("");
  let reversedPart = arr.slice(s, e + 1).reverse();
  for (let i = s; i <= e; i++) {
    arr[i] = reversedPart[i - s];
  }
  return arr.join("");
}
