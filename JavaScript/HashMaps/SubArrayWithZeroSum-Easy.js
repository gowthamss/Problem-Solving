// Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.
// If the given array contains a sub-array with sum zero return 1 else return 0.

// Ex:
// A = [1, 2, 3, 4, 5]  -> 0
// A = [-1, 1]  -> 1

//// Solution 1 - Brute Force - TC: O(n^2) - SC: O(1)
// Loop through all possibilities and check if sum any elements is 0.
// This covers all the edge cases but does not work for large inputs.
var subArrayWithZeroSum = (A) => {
    for (let i = 0; i < A.length; i++) {
        // If the current element is 0, then we a subarray which is equal to zero. So return 1.
        if (A[i] === 0) {
            return 1;
        }

        // Else continue checking all the elements
        let sum = A[i];
        for (let j = i + 1; j < A.length; j++) {
            sum += A[j];
            if (sum === 0) {
                return 1;
            }
        }
    }
    return 0;
};

//// Solution 2 - Using prefix sum and hashing - TC: O(n) - SC:O(n)
var subArrayWithZeroSum = (A) => {
    let prefixArr = [];
    prefixArr[0] = A[0];

    // Create a prefix sum array
    for (let i = 1; i < A.length; i++) {
        prefixArr[i] = A[i] + prefixArr[i - 1];
    }

    // If any element in the prefix sum array is 0, then we found that we have a subarray with sum 0 so return 1.
    for (let i = 0; i < prefixArr.length; i++) {
        if (prefixArr[i] === 0) {
            return 1;
        }
    }

    // Else, store them in hashmap/object with frequncies of prefix sum array.
    let lookup = {};
    for (let val of prefixArr) {
        // If any element repeats, that means the sum of the elememts in that range in the original array is equal to 0.
        // Return 1.
        if (lookup[val]) {
            return 1;
        } else {
            // Else store that with 1.
            lookup[val] = 1;
        }
    }
    return 0;
};

console.log(subArrayWithZeroSum([1, 2, 3, 4, 5]));
console.log(subArrayWithZeroSum([-1, 1]));