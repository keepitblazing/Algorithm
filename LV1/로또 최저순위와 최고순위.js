function solution(lottos, win_nums) {
    let answer = [];
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length;
    //현재 맞은 개수
    const zeros = lottos.filter(lotto => lotto === 0).length;
    //0의 개수
    let min = 7-correct >= 6 ? 6 : 7-correct;
    // 최저 7 - 맞은 개수 맞은 개수가 0이면 7등이 나오기 때문에 6으로 변경 
    let max = min-zeros < 1 ? 1 : min-zeros;
    // 최고 개수는 최저 등수에서 0의 개수만큼 배주면 됨 전부 0 일 경우가 있기 때문에 전부 0일 경우 1로 변경
    answer = [max, min]
    return answer;
}
