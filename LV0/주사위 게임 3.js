function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let set = new Set(arr);
  let newArr = Array.from(set);

  let newA = arr.filter((v) => v === arr[0]);
  let newB = arr.filter((v) => v === arr[1]);
  let newC = arr.filter((v) => v === arr[2]);

  switch (newArr.length) {
    case 1:
      return 1111 * newArr[0];
    case 2:
      if (newA.length === 3) {
        return Math.pow(10 * newArr[0] + newArr[1], 2);
      } else if (newA.length === 2) {
        return (newArr[0] + newArr[1]) * Math.abs(newArr[0] - newArr[1]);
      } else if (newA.length === 1) {
        return Math.pow(10 * newArr[1] + newArr[0], 2);
      }
    case 3:
      if (newA.length === 2) {
        let ac = newArr.filter((v) => v !== newA[0]);
        return ac[0] * ac[1];
      } else if (newB.length === 2) {
        let bc = newArr.filter((v) => v !== newB[0]);
        return bc[0] * bc[1];
      } else if (newC.length === 2) {
        let cc = newArr.filter((v) => v !== newC[0]);
        return cc[0] * cc[1];
      }
    case 4:
      return newArr.sort((a, b) => a - b)[0];
  }
}
