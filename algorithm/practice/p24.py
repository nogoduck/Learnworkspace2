# 대표값
import sys

# 파일 읽는 옵션 "r, rt" 는 동일하다 기본적으로 "r"을 사용하면 text를 읽기 때문이다.
# sys.stdin=open("input.txt", "r")

n =  int(input())
arr = list(map(int, input().split()))

# python의 반올림은 타 언어와 다르게 동작한다
# ex) 2.5 >> 2.0, 2.6 >> 3.0
# print(round(20.5))
# print(round(20.6))
# ++ 추가설명)
# 흔히 반올림은 round_half_up 방식을 사용한다, 5이상은 올림
# 파이썬은 round_helf_even 방식을 사용한다, 4.5000 은 4로 처리되고 4.5001은 5로 처리된다, 5.5000은 6으로 처리
# 정확하게 5 이상일때는 올림을 진행한다 (짝수쪽으로 근삿값을 만들어서 처리한다)

# 해결방법 : round를 사용하지 않고 0.5를 더해주고 int형으로 변환한다
# avg = round(sum(arr) / n) <- 기존의 방법
avg = int((sum(arr) / n) + 0.5)



# 파이썬에서는 정수가 플랫폼에 따라 2 31-1 또는 2 63-1 인 값을 전달하면 고정 크기 int표현에서 가변 폭 long표현 으로 자동 전환 됩니다.
# 아래 문제풀이에서는 최대값을 2의 31제곱이라 가정하고 진행함
diff = 2147483648
# enumerate 리스트의 값과 인덱스를 같이 반환해준다
resIdx = 0
resScore = 0
for i, v in enumerate(arr):
    #평균과 배열값의 차이가 제일 작은 것을 추출하기 위한 조건문
    tmp = abs(avg - v)
    if tmp < diff:
        diff = tmp
        resIdx = i + 1
        resScore = v
    elif tmp == diff:
        # 값의 차이가 동일한 값이 들어오면 값이 더 큰것을 결과에 넣어준다
        if v > resScore:
            resIdx = i + 1
            resScore = v

print(avg, resIdx)
        


    