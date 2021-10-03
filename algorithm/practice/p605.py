# 바둑이 승차 (미해결)

import sys
sys.stdin=open("input.txt", "r")

def dfs(idx, sum):
    global res
    if sum > w:
        return
    if idx >= n:
        if sum > res:
            res = sum
    else:
        dfs(idx + 1, sum + arr[idx])
        dfs(idx + 1, sum)
  
if __name__ == '__main__':
    w, n = map(int, input().split())
    arr = list(int(input())for _ in range(n))
    res = -2147000000
    dfs(0, 0)
    print(res)