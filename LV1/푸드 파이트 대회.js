function solution(food) {
  const answer = food
    .slice(1)
    .map((item, index) => String(index + 1).repeat(Math.floor(item / 2)))
    .join("");
  return `${answer}0${[...answer].reverse().join("")}`;
}
