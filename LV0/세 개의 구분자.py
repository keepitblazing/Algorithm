def solution(myStr):
    splitStr = re.split("[abc]", myStr)
    result = list(filter(lambda str: len(str) > 0, splitStr))
    return result if len(result) > 0 else ["EMPTY"]