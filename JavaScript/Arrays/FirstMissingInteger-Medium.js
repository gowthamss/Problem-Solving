//// Problem Statement
// Given an unsorted integer array A of size N. Find the first missing positive integer.

// Note: Your algorithm should run in O(n) time and use constant space.

// Input 1:

// [1, 2, 0]
// Input 2:

// [3, 4, -1, 1]
// Input 3:

// [-8, -7, -6]

// Output 1:

// 3
// Output 2:

// 2
// Output 3:

// 1

// ** Positive integers are from 1 to N

//// Brute Force - TC: O(n^2), SC: O(1)
// Iterate through all possible elements and find if all elements from 1 to N are present
var firstMissingIntegerBruteForce = (A) => {
    for (let i = 0; i < A.length; i++) {
        let flag = false;
        for (let j = 0; j < A.length; j++) {
            if (A[j] === i + 1) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            return i + 1;
        }
    }
    return A.length + 1;
}

//// Optimized1 - Using Set - TC: O(N), SC: O(N)
//  1. Add all the elements to set
//  2. Then iterate over all elements from 1 to N, and check to see if it is present in the set.
var firstMissingIntegerUsingSet = (A) => {
    let set = new Set(A);
    for (let i = 1; i <= A.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return A.length + 1;
}

//// Optimized 2 - Using Logic = TC: O(N), SC: O(1)
// This approach works by negating the value of an element corresponding to the index.
// If there are negative values then replace them with any number which is greater than length of the array, so we get all positive elements.
// Iterate over array and if the element is greater than length then simply continue, else change the value of the number that is present at that index to negative.
// If there are duplicates, simply ignore that operation if there is already a negative number.
// At the end there will be some elements which are positive and some are negative.
// Now, iterate over the modified array and find first positive element and return that index + 1.

var firstMissingIntegerUsingLogic = (A) => {
    let len = A.length;
    for (let i = 0; i < len; i++) {
        if (A[i] <= 0) {
            A[i] = len + 1;
        }
    }

    for (let i = 0; i < len; i++) {
        if (A[i] > len) {
            continue;
        } else {
            A[Math.abs(A[i]) - 1] = -1 * Math.abs(A[Math.abs(A[i]) - 1]);
        }
    }

    for (let i = 0; i < len; i++) {
        if (A[i] > 0) {
            return i + 1;
        }
    }
    return len + 1;
}

console.log(firstMissingIntegerBruteForce([3, 4, -1, 1]));
console.log(firstMissingIntegerUsingSet([3, 4, -1, 1]));
console.log(firstMissingIntegerUsingLogic([3, 4, -1, 1]));