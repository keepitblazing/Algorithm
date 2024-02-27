class Solution {
  public String solution(String my_string, int m, int c) {
    if (c > m) return "";
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < my_string.length(); i += m) {
      if (i + c <= my_string.length()) {
        result.append(my_string.charAt(i + c - 1));
      }
    }
    return result.toString();
  
}
