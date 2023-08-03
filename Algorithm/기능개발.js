function solution(progresses, speeds) {
  let estimatedTime = [];
  // 각 기능이 완성되기까지 걸리는 시간을 저장
  for (let i = 0; i < progresses.length; i++) {
    let least = 100 - progresses[i];
    estimatedTime.push(Math.ceil(least / speeds[i]));
  }

  let answer = [1];
  let max = estimatedTime[0];
  // estimatedTime 배열을 순회하면서 max보다 작거나 같으면 answer의 마지막 요소에 1을 더하고 아니면 answer에 1을 추가
  for (let i = 1; i < estimatedTime.length; i++) {
    if (estimatedTime[i] <= max) {
      answer[answer.length - 1]++;
    } else {
      answer.push(1);
      max = estimatedTime[i];
    }
  }

  return answer;
}
