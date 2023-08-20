function solution(n, arr1, arr2) {
  var arr1_binary = [];
  var arr2_binary = [];
  var answer = [];

  for (let j = 0; j < arr1.length; j++) {
    var temp1 = [];
    var temp2 = [];
    for (let i = 0; i < n; i++) {
      if (arr1[j] === 0) {
        temp1.unshift(0);
      } else {
        temp1.unshift(arr1[j] % 2);
        arr1[j] = parseInt(arr1[j] / 2);
      }
      if (arr2[j] === 0) {
        temp2.unshift(0);
      } else {
        temp2.unshift(arr2[j] % 2);
        arr2[j] = parseInt(arr2[j] / 2);
      }
    }
    arr1_binary.push(temp1);
    arr2_binary.push(temp2);
  }
  for (let i = 0; i < arr1_binary.length; i++) {
    var temp = [];
    for (let j = 0; j < arr1_binary[i].length; j++) {
      if (arr1_binary[i][j] === 1 || arr2_binary[i][j] === 1) temp.push("#");
      else temp.push(" ");
    }
    answer.push(temp.join(""));
  }
  return answer;
}
