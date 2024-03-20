def solution(nums):
    answer = 0
    canSelect = len(nums) / 2
    uniqueArr = list(set(nums))
    poketmon = len(uniqueArr)
    if canSelect == poketmon:
        answer = poketmon
    elif canSelect > poketmon:
        answer = poketmon
    else:
        answer = canSelect
    return answer
