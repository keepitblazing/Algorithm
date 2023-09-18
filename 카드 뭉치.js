function solution(cards1, cards2, goal) {
  let index = 0;
  let index2 = 0;
  for (let word of goal) {
    if (cards1[index] === word) index++;
    else if (cards2[index2] === word) index2++;
    else return "No";
  }
  return "Yes";
}
