def solution(d, budget):
    sorted_d = sorted(d)
    sum = 0
    answer = 0
    for i in sorted_d:
        sum += i
        if sum > budget:
            return answer
        answer += 1
    return answer
