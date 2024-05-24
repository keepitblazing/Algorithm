class Solution {

  public int solution(String my_string, String is_suffix) {
    if (my_string.equals(is_suffix)) return 1;
    return my_string.endsWith(is_suffix) ? 1 : 0;
  }
}
