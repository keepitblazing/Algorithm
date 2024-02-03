class Solution {

  public int solution(String dartResult) {
    int num = 0;
    int[] answer = new int[3];
    int temp = 0;
    int length = dartResult.length();
    int index = 0;
    for (int i = 0; i < length; i++) {
      if (dartResult.charAt(i) >= '0' && dartResult.charAt(i) <= '9') {
        if (dartResult.charAt(i) == '1' && dartResult.charAt(i + 1) == '0') {
          temp = 10;
          i++;
        } else {
          temp = dartResult.charAt(i) - '0';
        }
      } else if (dartResult.charAt(i) == 'S') {
        answer[index++] = temp;
      } else if (dartResult.charAt(i) == 'D') {
        answer[index++] = (int) Math.pow(temp, 2);
      } else if (dartResult.charAt(i) == 'T') {
        answer[index++] = (int) Math.pow(temp, 3);
      } else if (dartResult.charAt(i) == '#') {
        answer[index - 1] *= -1;
      } else if (dartResult.charAt(i) == '*') {
        if (index == 1) {
          answer[index - 1] *= 2;
        } else {
          answer[index - 1] *= 2;
          answer[index - 2] *= 2;
        }
      }
    }
    for (int i = 0; i < answer.length; i++) {
      num += answer[i];
    }
    return num;
  }
}
