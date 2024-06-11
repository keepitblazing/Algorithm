class Solution {

  public String solution(String s) {
    String answer = "";
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (Character.isUpperCase(c)) {
        answer += Character.toLowerCase(c);
      } else {
        answer += Character.toUpperCase(c);
      }
    }
    return answer;
  }
}
