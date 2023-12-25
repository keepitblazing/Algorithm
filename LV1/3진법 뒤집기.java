class Solution {
    public static int solution(int n) {
        String change = new StringBuilder(Integer.toString(n, 3)).reverse().toString(); 
        int answer = Integer.parseInt(change, 3);
        return answer;
    };
};