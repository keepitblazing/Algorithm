function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, j) => {
          return j % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
