# 재귀함수와 스택
import sys
sys.stdin=open("input.txt", "r")




# 현재 p500.py를 실행 할 수 있는 방법은 두 가지가 있습니다.
# 1. 인터프리터에서 직접 실행
# 2. 다른 파일에서 불러와서(Import) 실행
# 1번과 같이 실행을 하게 되면 __name__이라는 글로벌 변수에 "__main__"이 담겨져 실행이됩니다.
# 즉 직접 실행한 경우에만 if문 내의 코드를 수행하게 됩니다.
if __name__ == '__main__':
    n = int(input())
    dfs(n)
