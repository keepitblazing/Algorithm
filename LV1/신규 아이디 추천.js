function solution(new_id) {
  const answer = new_id
    .toLowerCase() //대문자 소문자로 치환
    .replace(/[^\w-_.]/g, "") // - 문자 _ . 제외하고 제거
    .replace(/\.{2,}/g, ".") // ..을 /으로 변경 {2.} 최소 두개 이상
    .replace(/^\.|\.$/g, "") //시작에 .또는 문장에 마지막에 .제거
    .replace(/^$/, "a") // 문장에 시작부터 끝까지 아무것도 없다면 a 넣기
    .slice(0, 15)
    .replace(/\.$/, ""); //길이가 16자 이상일때 15개로 변경 이때 끝에 .이 있다면 한번더 제거
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
