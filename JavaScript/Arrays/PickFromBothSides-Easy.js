//// Problem Statement

// Given an integer array A of size N.

// You can pick B elements from either left or right end of the array A to get maximum sum.

// Find and return this maximum possible sum.

// NOTE: Suppose B = 4 and array A contains 10 elements then

// You can pick first four elements or can pick last four elements or can pick 1 from front and 3 from back etc . you need to return the maximum possible sum of elements you can pick.

// Input 1:
//  A = [5, -2, 3 , 1, 2]
//  B = 3

// Input 2:
//  A = [1, 2]
//  B = 1

// Output 1:
//  8

// Output 2:
//  2


// We can solve this question using brute force, using prefix sum array or using sliding window method.

// Here I'm going to solve this using sliding window method as its TC is O(N) and SC is O(1)

//// Approach
// 1. First compute the sum of first B elements. And check if that is greater than current sum variable.
// 2. If yes change max with sum value (as this is the first operation we don't actually perform this operation, we can directly assign sum to max).
// 3. Now, there are two ways to iterate again. One is from front and one is from back. I'm going to iterate from back.
// 4. Start the loop from B-1 till i>=0. And at each iteration subtract current A[i] from sum and add one value from last element of the array. (To get the last value u can have a variable and store array length-1).
// 5. After the addition and subtraction, compare current sum to max and update max.
// At the end return max.

// **Note: You can run this code in any browser console.

var pickFromBothSides = (A, B) => {
    let max = Number.MIN_SAFE_INTEGER,
        sum = 0,
        len = A.length - 1;

    for (let i = 0; i < B; i++) {
        sum += A[i];
    }
    if (sum > max) max = sum;

    for (let i = B - 1; i >= 0; i--) {
        sum += A[len] - A[i];
        if (sum > max) max = sum;
        len--;
    }
    return max;
}

console.log(pickFromBothSides([5, -2, 3, 1, 2], 3));