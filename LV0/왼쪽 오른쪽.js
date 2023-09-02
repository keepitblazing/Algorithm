function solution(str_list) {
  let firstL = str_list.indexOf("l");
  let firstR = str_list.indexOf("r");

  if (firstL === -1 && firstR === -1) {
    return [];
  } else if (firstR === -1 || (firstL !== -1 && firstL < firstR)) {
    return str_list.slice(0, firstL);
  } else {
    return str_list.slice(firstR + 1);
  }
}
