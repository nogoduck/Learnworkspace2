# 동전 교환
import sys
sys.stdin=open("input.txt", "r")
input = sys.stdin.readline

def dfs(L, sum):
    global m, res
    if L > res:
        return
    if sum > m:
        return
    if sum == m:
        if L < res:
            res = L
    else:
        for i in range(n):
            dfs(L + 1, sum + c[i])
        
if __name__ == '__main__':
    n = int(input())
    c = list(map(int, input().split()))
    m = int(input())
    res = 2147000000
    dfs(0, 0)
    print(res)
