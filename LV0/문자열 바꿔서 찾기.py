def solution(myString, pat):
    newMyString = ""
    for i in range(len(myString)):
        if myString[i] == 'A':
            newMyString += 'B'
        elif myString[i] == 'B':
            newMyString += 'A'
    return 1 if pat in newMyString else 0