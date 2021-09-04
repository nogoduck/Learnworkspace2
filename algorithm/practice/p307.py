# 사과나무 (다이아몬드)
import sys
# sys.stdin=open("input.txt", "r")

def printArr(arr):
    for i in arr:
        print(*i)


n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# printArr(arr)

lt = n // 2
rt = n // 2 + 1
res = 0
for i in range(n):
    # print(lt, rt)
    for j in range(lt, rt):
        res += arr[i][j]
    
    if i < n // 2:
        lt -= 1
        rt += 1
    else:
        lt += 1
        rt -= 1

print(res)