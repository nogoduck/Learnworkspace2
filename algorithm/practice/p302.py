# 숫자만 추출

import sys
sys.stdin=open("input.txt", "r")


def measureCnt(n):
    cnt = 0
    for i in range(1, n + 1):
        if not res % i:
            cnt += 1
    return cnt

n = input()
res = 0 
for v in n:
    num = []
    if v.isdigit():
        res = res * 10 + int(v)

print(res)
print(measureCnt(res))