# 이진수 출력
import sys
sys.stdin=open("input.txt", "r")

def dfs(x):
    if not x:
        return

    dfs(x // 2)
    print(x % 2, end="")



if __name__ == '__main__':
    n = int(input())
    # print(n)
    dfs(n)
