function solution(n, lost, reserve) {
  let count = n - lost.length;
  let tmp_lost = [];

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // lost와 reserve 두 개 모두 속한 애는 여벌 옷이 없는 것과 같다.
  // 따라서 reserve 배열에서 제거하고, count를 1 증가시킨다.
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((element) => element !== lost[i]);
      count++;
    } else {
      // lost, reverse 두 개 모두에 속하지 않은 원소를 따로 저장해둔다.
      tmp_lost.push(lost[i]);
    }
  }
  lost = tmp_lost;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      // 자기보다 왼쪽에 있는 경우
      reserve = reserve.filter((e) => e !== lost[i] - 1);
      count++;
    } else if (reserve.includes(lost[i] + 1)) {
      // 자기보다 오른쪽에 있는 경우
      reserve = reserve.filter((e) => e !== lost[i] + 1);
      count++;
    }
  }

  return count;
}
