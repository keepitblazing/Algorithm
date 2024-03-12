class Solution {

  public int[] solution(String my_string) {
    int[] answer = new int[52];
    for (int i = 0; i < my_string.length(); i++) {
      int code = my_string.charAt(i);
      if (code >= 65 && code <= 90) {
        answer[code - 65]++;
      } else if (code >= 97 && code <= 122) {
        answer[code - 97 + 26]++;
      }
    }
    return answer;
  }
}
