# 가장 큰 수
from itertools import permutations

def solution(numbers):
    # 외장함수를 쓰지 않고 다시 풀 문제입니다.
    answer = 0
    perList = permutations(numbers)

    for i in perList:
        # print(i)
        strList = list(map(str, i))
        # print(strList)
        intList = int("".join(strList))
        # print(intList)
        if intList > answer:
            answer = intList
    # print(answer)
    
    return str(answer)


print(solution([6, 10, 2]))
print(solution([3, 30, 34, 5, 9]))