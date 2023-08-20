function solution(my_string, indices) {
  let sortedIndices = indices.sort((a, b) => a - b);
  return [...my_string].filter((v, i) => !sortedIndices.includes(i)).join("");
}
