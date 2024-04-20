def solution(picture, k):
    result = []
    for i in range(len(picture)):
        row = ""
        for j in range(len(picture[i])):
            row += picture[i][j] * k
        for j in range(k):
            result.append(row)
    return result