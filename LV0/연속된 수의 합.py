def solution(num, total):
    result = []

    average = total // num

    middle = num // 2

    for i in range(average - middle, average + middle + 1):
        sum = 0
        for j in range(i, i + num):
            sum += j

        if sum == total:
            for k in range(i, i + num):
                result.append(k)
            break

    return result

