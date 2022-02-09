//// Problem Statement

// Given an array A of size N, groot wants you to pick 2 indices i and j such that

// 1 <= i, j <= N
// A[i] % A[j] is maximum among all possible pairs of (i, j).
// Help Groot in finding the maximum value of A[i] % A[j] for some i, j.



// Problem Constraints

// 1 <= N <= 100000
// 0 <= A[i] <= 100000



// Input Format

// First and only argument in an integer array A.



// Output Format

// Return an integer denoting the maximum value of A[i] % A[j] for any valid i, j.



// Example Input

// Input 1:

//  A = [1, 2, 44, 3]
// Input 2:

//  A = [2, 6, 4]


//// Solution - Simple Observation - TC: O(N), SC: O(1)
// 1. The observation is that if we divide a larger number with the smaller number, then the smaller number will be the answer.
// 2. So we find firstMax and secondMax, because with these two we can find the highest value.
// 3. For ex, [1, 2, 44, 3] in this array the firstMax=44, and secondMax=3, so we perform 3%44 we will get 3.

//// **Note: You can run this in browser console.

var maxMod = (A) => {
    let len = A.length;

    if (len === 1) return 0;

    let firstMax = Number.MIN_SAFE_INTEGER,
        secondMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
        if (A[i] > firstMax) {
            firstMax = A[i];
        }
    }

    for (let i = 0; i < len; i++) {
        if (A[i] > secondMax && A[i] < firstMax) {
            secondMax = A[i];
        }
    }

    if (secondMax === Number.MIN_SAFE_INTEGER) return 0;

    return secondMax % firstMax;
}

console.log(maxMod([1, 2, 44, 3]));
console.log(maxMod([2, 6, 4]));