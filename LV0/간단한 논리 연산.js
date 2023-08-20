function solution(x1, x2, x3, x4) {
  return cal(x1, x2) && cal(x3, x4) ? true : false;
}

function cal(a, b) {
  if (a && b) {
    return true;
  } else if ((a && !b) || (!a && b)) {
    return true;
  } else {
    return false;
  }
}
