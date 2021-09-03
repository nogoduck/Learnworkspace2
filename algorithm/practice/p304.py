# 두 리스트 합치기

import sys
# sys.stdin=open("input.txt", "r")

def pushArr(arr):
    global tmp
    for v in arr:
        tmp.append(v)


tmp = []
for _ in range(2):
    n = int(input())
    arr = list(map(int, input().split()))
    pushArr(arr)
        

print(*sorted(tmp))





