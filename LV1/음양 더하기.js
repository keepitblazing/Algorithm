function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}

// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     if (signs[i] === true) {
//       answer = answer + absolutes[i];
//     } else {
//       answer = answer - absolutes[i];
//     }
//   }
//   return answer;
// }
