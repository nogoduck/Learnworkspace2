# 격자판 최대합
import sys
# sys.stdin=open("input.txt", "r")

def printArr(arr):
    for i in arr:
        print(*i)


n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
res = -2147000000
for i in range(n):

    rowSum = 0 
    colSum = 0
    for j in range(n):
        rowSum += arr[i][j]
        colSum += arr[j][i]
    
    if res < rowSum:
        res = rowSum
    if res < colSum:
        res = colSum

    

# if n % 2: (succeed but not used)
#     arrHalf = n // 2
# else:
#     arrHalf = n // 2 - 1
    
# arrHalf = n % 2 if n // 2 else n // 2 - 1 (failed)

arrHalf = n // 2
# print(type(arrHalf), arrHalf)
sumX = sumY = arrHalf


# print(arrHalf)

for i in range(1, arrHalf):
    sumX += arr[arrHalf - i][arrHalf - i]
    sumX += arr[arrHalf + i][arrHalf + i]

for i in range(1, arrHalf):
    sumY += arr[arrHalf - i][arrHalf + i]
    sumY += arr[arrHalf + i][arrHalf - i]

if res < sumX:
    res = sumX
if res < sumY:
    res = sumY

print(res)
