import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        String stringifyN = Integer.toString(n);

        for (String s : splitedN.split("")) {
        	answer += Integer.parseInt(s);
        }

        return answer;
    }
}