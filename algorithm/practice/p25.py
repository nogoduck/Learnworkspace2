# 정다면체
import sys
sys.stdin=open("input.txt", "r")

n, m = map(int, input().split())
arr = [0] * (n + m + 1)

for i in range(1, n + 1):
    for j in range(1, m + 1):
        arr[i + j] += 1

print(arr)
max = -2147483648
for i in range(n + m + 1):
    if max < arr[i]:
        max = arr[i]


print('max >> ', max)
for i, v in enumerate(arr):
    if v >= max:
        print(i, end=" ")
