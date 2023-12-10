def solution(abosolute, signs):
    answer = 0
    for i in range(len(abosolute)):
        if signs[i]:
            answer += abosolute[i]
        else:
            answer -= abosolute[i]
    return answer