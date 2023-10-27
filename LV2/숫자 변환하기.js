// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.
// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

function solution(x, y, n) {
  if (x > y) return -1;

  let visited = new Set();
  let queue = [{ value: y, count: 0 }];

  while (queue.length) {
    let current = queue.shift();
    // 현재 값이 x와 같으면 count를 반환한다.
    if (current.value === x) return current.count;
    // 현재 값이 x보다 작거나, 이미 방문한 값이면 continue
    if (visited.has(current.value) || current.value < x) continue;
    // 현재 값을 방문했다고 표시한다.
    visited.add(current.value);
    // 현재 값이 3으로 나누어 떨어지면 3으로 나눈 값을 queue에 넣는다.
    if (current.value % 3 === 0)
      queue.push({ value: current.value / 3, count: current.count + 1 });
    // 현재 값이 2로 나누어 떨어지면 2로 나눈 값을 queue에 넣는다.
    if (current.value % 2 === 0)
      queue.push({ value: current.value / 2, count: current.count + 1 });
    queue.push({ value: current.value - n, count: current.count + 1 });
  }

  return -1;
}
