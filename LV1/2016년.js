function solution(a, b) {
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let today = 0;

  for (let i = 0; i < a - 1; i++) {
    today += month[i];
  }
  return day[(today + b) % 7];
}
