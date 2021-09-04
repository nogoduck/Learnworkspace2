# 봉우리
import sys
# sys.stdin=open("input.txt", "r")

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def printArr(arr):
    for i in arr:
        print(*i)

def find(a, b):
    global n
    for i in range(4):
        x = a + dx[i]
        y = b + dy[i]
        if 0 <= x < n and 0 <= y < n:
            if arr[a][b] <= arr[x][y]:
                return False
    # print(arr[a][b], res)
    return True

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
res = 0
for i in range(n):
    for j in range(n):
        if find(i, j):
            res += 1
       


print(res)
