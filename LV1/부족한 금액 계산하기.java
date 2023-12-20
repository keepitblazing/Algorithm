class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0
        long howmuch = 0;
        for (int i = 1; i <= count; i++) {
            howmuch += price * i;
        }
        return howmuch - money < 0 ? 0 : howmuch - money;
    }
}