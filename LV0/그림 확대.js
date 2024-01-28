function solution(picture, k) {
  let result = [];
  for (let i = 0; i < picture.length; i++) {
    let row = "";
    for (let j = 0; j < picture[i].length; j++) {
      row += picture[i][j].repeat(k);
    }
    for (let j = 0; j < k; j++) {
      result.push(row);
    }
  }
  return result;
}
