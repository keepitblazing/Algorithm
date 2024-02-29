def solution(numLog):
    answer = ""
    startNum = numLog[0]

    for i in range(1, len(numLog)):
        control = (startNum - numLog[i]) * -1
        if control == 1:
            answer += "w"
        elif control == -1:
            answer += "s"
        elif control == 10:
            answer += "d"
        elif control == -10:
            answer += "a"
        startNum = numLog[i]
    return answer
