function solution(queue1, queue2) {
  let answer = 0;
  let queueSum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let queueSum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const targetSum = (queueSum1 + queueSum2) / 2;

  if (targetSum !== Math.floor(targetSum)) return -1;

  let combinedQueue = [...queue1, ...queue2];
  let len = combinedQueue.length;
  let i = 0,
    j = queue1.length;
  let currentSum = queueSum1;

  while (answer <= len * 2) {
    if (currentSum === targetSum) {
      return answer;
    } else if (currentSum > targetSum) {
      currentSum -= combinedQueue[i++];
    } else {
      currentSum += combinedQueue[j++];
    }
    answer++;
  }

  return -1;
}
