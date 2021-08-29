# 점수 계산

import sys
# sys.stdin=open("input.txt", "r")

n = int(input())
arr  = list(map(int, input().split()))

score = 0
combo = 0


for i in range(0, n):
    if arr[i] == 1:
        score += combo + 1
        combo += 1
    else : 
        combo = 0 

print(score)