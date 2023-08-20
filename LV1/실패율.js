function solution(N, stages) {
  // 사용자의 수
  let userNumber = stages.length;
  // 각 스테이지의 실패율을 기록할 배열
  let failureRateArray = [];
  // 각 스테이지의 실패율 구하기
  for (let i = 1; i <= N; i += 1) {
    // i 스테이지에서 실패한 유저 수
    let failureStageNum = stages.filter((x) => x === i).length;
    let failureRate = 0;
    // 스타이지를 통과하지못한 수가 0일때 실패율은 0
    if (failureStageNum === 0) {
      failureRate = 0;
    } else {
      // 실패율 구하기
      failureRate = failureStageNum / userNumber;
    }
    // 남은 사용자수
    userNumber -= failureStageNum;
    // 배열에 넣기 (객체 형태로)
    failureRateArray.push({ idx: i, rate: failureRate });
  }

  // 실패율을 정렬하기
  // 내림차순을 기본으로, 같은 것 끼리는 stage 오름차순으로 정렬
  failureRateArray.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else if (a.rate < b.rate) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return a + b;
      } else {
        return a - b;
      }
    }
  });
  return failureRateArray.map((x) => x.idx);
}
