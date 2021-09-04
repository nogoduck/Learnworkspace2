# 스도쿠 검사
import sys
# sys.stdin=open("input.txt", "r")

dx = [0, 0, 1, 1, 1, 2, 2, 2]
dy = [1, 2, 0, 1, 2, 0, 1, 2]
arr = [list(map(int, input().split())) for _ in range(9)]

def printArr(arr):
    for i in arr:
        print(*i)

def checkArr(nx, ny):
    # print('nx, ny >> ', nx, ny)
    global arr, cnt
    check = [True] * 10
    for i in range(8):
        x = nx + dx[i]
        y = ny + dy[i]
        # print('x, y >> ', x, y)
        num = arr[x][y]
        if check[num]:
            check[num] = False
            continue
        return 
    cnt -= 1

cnt = 9
for i in range(0, 7, 3):
    for j in range(0, 7, 3):
        checkArr(i, j)
            
print("NO" if cnt else "YES")