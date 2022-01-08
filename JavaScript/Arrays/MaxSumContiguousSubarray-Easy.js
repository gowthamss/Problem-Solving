//// Problem Statement
// Find the contiguous subarray within an array, A of length N which has the largest sum.

// Input 1:

//  A = [1, 2, 3, 4, -10] 
// Input 2:

//  A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 

// Output 1:

//  10  - The max sum subarray is [1,2,3,4]
// Output 2:

//  6   - The max sum subarray is [4,-1,2,1]

//// Solution 1 - Brute Force - TC: O(N^3), SC: O(1) - Does not work for all inputs
// Iterate over all possible subarrays and calculate the sum of each subarray and find the max
var maxSumContiguousSubarrayBruteForce = (A) => {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += A[k];
            }
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}


//// Solution 2 - Optimized 1 Using Carry Forward technique - TC: O(N^2), SC: O(1) - Does not work for all inputs
// It is an observation from the brute force solution
// In the brute force solution we are calculating sum of every possible subarray
// That means we are calculating sum of same subarray by just adding one more element to it
// We can use this and carry forward the previous sum to the next iteration and find the sum of next subarray by just adding one element
// Ex: [1,2,3], in this we are calculating sums for [1] [1,2] [1,2,3] separately
// But as we have [1] already caculated we can just add to the next element and find the sum of [1,2]

var maxSumContiguousSubarrayCarryForward = (A) => {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

//// Solution 3 - Optimized 2 Using Kadane's Algorithm - TC: O(N), SC: O(1)
// In this approach, we will have two variables, one stores sum and another stores the maximum value that we have seen so far
// If the sum comes out to be a negative number then it will not contribute to the maximum number so we reset sum to 0 in this case
// The catch here is that, if we see any negative number then we can check the next number to it
// If the next number is greater than the positive form of the negative number then it can contribute some value to the maximum
// If it is less than, it will not contribute and it reduces the maximum, so we dont consider adding negative number in this case
// Ex: 3 4 -4 6 - In this -4+6=2. So this 2 will get added to previous 3+4+2 = 9 which is incresing the sum
//     3 4 -4 3 - In this -4+3=-1. So this -1 will reduce the previous 3+4= 7 to 3+4-1 = 6, so we ignore negative numbers in this case.

var maxSumContiguousSubarrayKadanes = (A) => {
    let sum = 0,
        max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];

        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(maxSumContiguousSubarrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSumContiguousSubarrayCarryForward([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSumContiguousSubarrayKadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4]));