m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for i, row in enumerate(m):
    if i == 0 or i % 2 == 0:
        for column in range(len(row)):
            print(m[i][column])
    else:
        for column in range(len(row) - 1, -1, -1):
            print(m[i][column])
