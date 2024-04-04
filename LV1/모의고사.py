def solution(answers):
    supo1 = [1, 2, 3, 4, 5]
    supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    supos = [0, 0, 0]

    for i in range(len(answers)):
        if supo1[i % 5] == answers[i]:
            supos[0] += 1
        if supo2[i % 8] == answers[i]:
            supos[1] += 1
        if supo3[i % 10] == answers[i]:
            supos[2] += 1

    ilDeung = max(supos)
    answer = []
    for i in range(3):
        if supos[i] == ilDeung:
            answer.append(i + 1)

    return answer
