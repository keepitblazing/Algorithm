def solution(str_list):
    firstL = str_list.index("l")
    firstR = str_list.index("r")

    if firstL == -1 and firstR == -1:
        return []
    elif firstR == -1 or (firstL != -1 and firstL < firstR):
        return str_list[:firstL]
    else:
        return str_list[firstR + 1:]
