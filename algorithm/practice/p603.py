# 부분집합 구하기

import sys
sys.stdin=open("input.txt", "r")

def dfs(x):
    if x > n:
        for i in range(1, n + 1):
            if check[i]:
                print(i, end=" ")
        print()
    else:
        check[x] = True
        dfs(x + 1)
        check[x] = False
        dfs(x + 1)

if __name__ == '__main__':
    n = int(input())
    check = [False] * (n + 1)
    dfs(1)