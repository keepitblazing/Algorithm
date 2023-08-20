function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length
    getAnswer(0,0);
    function getAnswer(x, v) {
        if(x < length){
            getAnswer(x + 1, v + numbers[x]);
            getAnswer(x + 1, v - numbers[x]);
        } else{
            if(v === target){
                answer++
            }
        }
    }
    return answer;
}
