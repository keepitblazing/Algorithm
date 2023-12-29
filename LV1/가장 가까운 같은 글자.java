import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        HashMap<Character,Integer> map = new HashMap<>();
        for(int i=0; i<s.length();i++){
            char character = s.charAt(i);
            answer[i] = i - map.getOrDefault(character,i+1);
            map.put(character,i);
        }
        return answer;
    }
}
