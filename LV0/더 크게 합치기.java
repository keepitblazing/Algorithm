public class Solution {
    public int solution(int a, int b) {
        String aStr = String.valueOf(a);
        String bStr = String.valueOf(b);

        int ab = Integer.parseInt(aStr + bStr);
        int ba = Integer.parseInt(bStr + aStr);

        return Math.max(ab, ba);
    }
}
