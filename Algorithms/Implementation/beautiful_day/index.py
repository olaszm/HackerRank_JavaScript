def beautifulDays(i, j, k):
    arr = []
    for i in range(i, j):
        x = int(str(i)[::-1])
        a = str((i - x) / k).endswith('0')

        if(a):
            arr.append(i)
    return len(arr)


beautifulDays(20, 23, 6)  # 2
