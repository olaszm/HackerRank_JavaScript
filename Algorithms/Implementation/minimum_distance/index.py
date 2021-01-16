def minimumDistances(a):
    indx = []
    for i in range(len(a)):
        for k in range(round(len(a))):
            if(a[i] == a[k] and abs(i-k) != 0):
                indx.append(abs(i-k))

    if(len(indx) != 0):
        return min(indx)
    else:
        return -1


result = minimumDistances([7, 1, 3, 4, 1, 7])


print(result)
