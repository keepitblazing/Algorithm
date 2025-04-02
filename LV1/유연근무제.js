function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let schedule = schedules[i] + 10;
    if (schedule % 100 >= 60) {
      schedule += 100;
      schedule -= 60;
    }

    let count = 0;
    for (let j = 0; j < 7; j = j + 1) {
      let nowDate = j + startday;
      if (nowDate % 7 === 0 || nowDate % 7 === 6) {
        continue;
      }
      if (schedule < timelogs[i][j]) {
        break;
      }
      count++;
    }

    if (count === 5) {
      answer++;
    }
  }

  return answer;
}
