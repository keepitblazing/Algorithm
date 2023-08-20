function solution(answers) {
  let supo1 = [1, 2, 3, 4, 5];
  let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let supos = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (supo1[i % 5] === answers[i]) {
      supos[0] += 1; //++ 도 가능
    }
    if (supo2[i % 8] === answers[i]) {
      supos[1] += 1;
    }
    if (supo3[i % 10] === answers[i]) {
      supos[2] += 1;
    }
  }

  let ilDeung = Math.max(supos[0], supos[1], supos[2]); //도 가능Math.max(...supos);
  let answer = [];
  for (let i = 0; i < 3; i++) {
    if (supos[i] == ilDeung) {
      //supos i가 0부터 시작하기 때문에 i에 1을더 해 [1],[2],[3] 값이 나오게 함
      answer.push(i + 1);
    }
  }

  return answer;
}
