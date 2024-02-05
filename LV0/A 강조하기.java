public class Solution {
    public String solution(String myString) {
        StringBuilder answer = new StringBuilder(); 
        for (int i = 0; i < myString.length(); i++) {
            char ch = myString.charAt(i); 
            if (ch == 'a') {
                answer.append(Character.toUpperCase(ch));
            } else if (ch == 'A') {
                answer.append(ch);
            } else {
                answer.append(Character.toLowerCase(ch));
            }
        }
        return answer.toString(); 
    }
}
