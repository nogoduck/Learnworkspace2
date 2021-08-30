# K번째수

def solution(array, commands):

    # print(array, commands)
    answer = []
    
    for i in commands:
        tmp = array[(i[0] - 1) : (i[1])]
        # print(tmp)
        tmp.sort()
        # print(tmp)

        answer.append(tmp[i[2] - 1])

    # print(answer)
    return answer

solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]])