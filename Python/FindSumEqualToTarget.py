def findSumEqualToValue(arr1, arr2, target):
  for first in arr1:
    for second in arr2:
      sum = first + second
      if sum == target:
        return True
  return False    

print(findSumEqualToValue([1,2,3],[3,4,9],9))