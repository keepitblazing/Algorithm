function solution(arr) {
  if (arr.length <= 1) return [-1];

  const min = Math.min(...arr);
  return arr.filter((item) => item !== min);
}

// function solution(arr) {
//     if (arr.length <= 1) return [-1];
//     //배열에 길이보다 작은 것은 [-1] 리턴
//     let min;
//     for (let i = 0; i < arr.length; i++) {
//       min = min < arr[i] ? min : arr[i];
//     }
//     arr.splice(arr.indexOf(min), 1); //min값만 제거

//     return arr;
//   }
