def solution(num_list):
    length = len(num_list)
    last = num_list[length - 1]
    beforeLast = num_list[length - 2]
    if last > beforeLast:
        num_list.append(last - beforeLast)
    else:
        num_list.append(last * 2)

    return num_list