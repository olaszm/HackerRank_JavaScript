def birthday(s, d, m):
    c = 0
    for i in range(len(s)):
        sum = 0
        for j in range(0, m):
            if(i+j < len(s)):
                sum += s[i+j]
        if(sum == d):
            c += 1
    return c


print(birthday([1, 2, 1, 3, 2], 3, 2))
