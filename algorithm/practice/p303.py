# 카드 역배치

import sys
# sys.stdin=open("input.txt", "r")

arr = list(range(21))

for _ in range(10):
    n, m = map(int, input().split())
    haltCnt = (m - n + 1) // 2

    for i in range(haltCnt):
        arr[n + i], arr[m - i] = arr[m - i], arr[n + i]

print(*arr[1:])