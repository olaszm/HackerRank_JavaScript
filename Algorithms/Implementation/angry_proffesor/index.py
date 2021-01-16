def angryProfessor(k, a):
    s = [];
    for i in range(len(a)):
        if(a[i] <= 0):
            s.append(a[i])

            
    if(len(s) >= k):
        return 'NO'
    else: 
        return 'YES'



result = angryProfessor(3, [-1, -3, 4, 2])

print(result)
