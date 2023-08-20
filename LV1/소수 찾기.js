function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) answer++;
  }
  return answer;
}
function checkPrime(isPrimeNumber) {
  if (isPrimeNumber === 2) return true; //2는 소수이기 때문에 true 리턴
  if (isPrimeNumber % 2 === 0) return false; // 2를 제외한 짝수는 소수 x false 리턴
  for (let i = 3; i * i <= isPrimeNumber; i += 2) {
    if (isPrimeNumber % i === 0) return false;
  } //for문을 돌려서 홀수일 경우 소수 판단
  return true;
}
