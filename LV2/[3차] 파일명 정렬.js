function solution(files) {
  function splitFileName(file) {
    let head = file.match(/^\D+/)[0].toLowerCase();
    let number = file.substr(head.length).match(/^\d+/)[0];
    return [head, Number(number)];
  }

  return files.sort((a, b) => {
    let [headA, numberA] = splitFileName(a);
    let [headB, numberB] = splitFileName(b);
    if (headA < headB) return -1;
    if (headA > headB) return 1;
    return numberA - numberB;
  });
}
