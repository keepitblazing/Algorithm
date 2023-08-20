function solution(n) {
  //12345
  let n2 = String(n);
  //"12345"
  let n_arr = Array.from(n2);

  let n_arr2 = n_arr.map((i) => Number(i));
  //["1","2","3","4","5"]
  let n_arr3 = n_arr2.sort(function (a, b) {
    return b - a;
  });
  //["5","4","3","2","1"]

  //[5, 4, 3, 2, 1]
  return n_arr3;
}
