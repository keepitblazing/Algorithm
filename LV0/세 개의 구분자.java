class Solution {

  public String[] solution(String myStr) {
    String[] splitStr = myStr.split("[abc]");
    List<String> result = Arrays
      .stream(splitStr)
      .filter(str -> str.length() > 0)
      .collect(Collectors.toList());
    return result.size() > 0
      ? result.toArray(new String[0])
      : new String[] { "EMPTY" };
  }
}
