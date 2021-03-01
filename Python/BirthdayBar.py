def birthday(arr, d, m):
    counter = 0
    for i in range(len(arr) - 1):
        sum = 0
        for j in range(i, i+m):
            sum += arr[j]
        if(sum == d):
            counter += 1

    return counter


print(birthday([1, 2, 1, 3, 2], 3, 2))
