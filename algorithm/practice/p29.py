# 주사위 게임

import sys
# sys.stdin=open("input.txt", "r")

n = int(input())
res = 0
for i in range(n):
    arr  = list(map(int, input().split()))
    # print(arr)

    if arr[0] == arr[1] == arr[2]:
        award = 10000 + arr[0] * 1000
    elif arr[0] == arr[1] or arr[0] == arr[2]:
        award = 1000 + arr[0] * 100
    elif arr[1] == arr[2]:
        award = 1000 + arr[1] * 100
    else:
        award = max(arr) * 100

    if res < award:
        res = award

print(res)