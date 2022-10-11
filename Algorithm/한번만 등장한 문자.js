function solution(s) {
    let answer = '';
    return s.split("").sort().filter(a => s.indexOf(a) === s.lastIndexOf(a)).join("")
}