def solution(dartResult):
    tmp = []
    temp = 0
    index = 0
    for i in dartResult:
        if "0"<=i<="9":
            temp = temp * 10 + int(i)
        elif i == "S":
            tmp.append(temp)
            temp = 0
            index+=1
        elif i == "D":
            tmp.append(temp**2)
            temp = 0
            index += 1
        elif i == "T":
            tmp.append(temp ** 3)
            temp = 0
            index += 1
        elif i == "*":
            if index>1:
                tmp[index - 2] *= 2
            tmp[index - 1] *= 2
        elif i == "#":
            tmp[index - 1] *= -1
    return sum(tmp)