from itertools import combinations

def solution(relation):
    answer = 0
    columnLength = len(relation[0])
    rowLength = len(relation)
    subset = []
    #부분집합구하기
    for i in range(1, columnLength+1):
        subset.extend(combinations(range(columnLength), i))      
        
    #부분집합의 column index로 유일성 검사체크하기
    unique = []
    for subsetI in subset:
        tmpcan = [tuple([item[key] for key in subsetI]) for item in relation]        
        if len(set(tmpcan)) == rowLength: 
            flag = True
    #issubset으로 최소성 체크하기        
            for x in unique:
                if set(x).issubset(set(subsetI)):
                    flag = False
                    break                   
            if flag: unique.append(subsetI)

    return len(unique)
