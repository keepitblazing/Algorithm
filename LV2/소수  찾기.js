function solution(numbers) {
  const arr = numbers.split("");
  const answer = new Set();
  getNumber(arr, "");
  function getNumber(numbersArr, currentNumber) {
    if (numbersArr.length) {
      for (let i = 0; i < numbersArr.length; i++) {
        const temp = [...numbersArr];
        temp.splice(i, 1);
        if (isPrime(Number(currentNumber + numbersArr[i]))) {
          answer.add(Number(currentNumber + numbersArr[i]));
        }
        getNumber(temp, currentNumber + numbersArr[i]);
      }
    }
  }
  return answer.size;
}

function isPrime(num) {
  if (num === 0 || num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
