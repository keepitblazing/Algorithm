function solution(A, B) {
  let answer = 0;

  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);
  for (let i = 0; i < sortA.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
