// 시간 변환
function timeToMin(time) {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
}

function solution(fees, records) {
  const parkingCar = {};

  // 주차장에 있는 차량들의 주차 시작, 종료 시간을 저장
  for (const record of records) {
    const [time, carNum, action] = record.split(" ");
    // 주차장에 들어온 경우
    if (action === "IN") {
      if (!parkingCar[carNum]) {
        parkingCar[carNum] = [];
      }
      parkingCar[carNum].push(timeToMin(time));
    }
    // 주차장에서 나간 경우
    else {
      if (parkingCar[carNum]) {
        parkingCar[carNum].push(timeToMin(time));
      }
    }
  }

  // 주차장에 들어온 차량이 나가지 않은 경우, 23:59에 나간 것으로 간주
  for (const carNum in parkingCar) {
    if (parkingCar[carNum].length % 2 !== 0) {
      parkingCar[carNum].push(23 * 60 + 59);
    }
  }

  // 주차된 차량들의 주차 시간을 계산
  const parkedTime = {};
  for (const carNum in parkingCar) {
    let totalTime = 0;
    for (let i = 0; i < parkingCar[carNum].length; i += 2) {
      totalTime += parkingCar[carNum][i + 1] - parkingCar[carNum][i];
    }
    parkedTime[carNum] = totalTime;
  }

  const result = {};
  for (const carNum in parkedTime) {
    const time = parkedTime[carNum];
    if (time <= fees[0]) {
      result[carNum] = fees[1];
    } else {
      result[carNum] =
        fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    }
  }

  const sortedResult = Object.keys(result).sort((a, b) => a - b);
  return sortedResult.map((carNum) => result[carNum]);
}
