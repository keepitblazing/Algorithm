function solution(n) {
  let answer = 0;
  // 1부터 n까지 순회
  for (let start = 1; start <= n; start++) {
    let sum = 0;
    // start부터 n까지 순회
    for (let end = start; end <= n; end++) {
      // sum에 end를 더해줌
      sum += end;
      // sum이 n과 같으면 answer++
      if (sum === n) {
        answer++;
        break;
        // sum이 n보다 크면 break
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}
