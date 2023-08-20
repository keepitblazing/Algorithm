function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let c = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b); //2,3,5,6

    answer.push(c[commands[i][2] - 1]); //c 0,2 => 3 3번째 값이 인덱스 3이 아님
  }

  return answer;
}
