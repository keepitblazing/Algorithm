function solution(arr) {
  let arrLeng = arr.length;
  let innerArrLeng = arr[0].length;

  if (arrLeng === innerArrLeng) {
    return arr;
  } else if (arrLeng > innerArrLeng) {
    return arr.map((v) => [...v, ...Array(arrLeng - innerArrLeng).fill(0)]);
  } else {
    let additionalRows = Array(innerArrLeng - arrLeng)
      .fill()
      .map(() => Array(innerArrLeng).fill(0));
    return [...arr, ...additionalRows];
  }
}
