function solution(myStr) {
  let splitStr = myStr.split(/[abc]/);
  let result = splitStr.filter(function (str) {
    return str.length > 0;
  });
  return result.length === 0 ? ["EMPTY"] : result;
}
