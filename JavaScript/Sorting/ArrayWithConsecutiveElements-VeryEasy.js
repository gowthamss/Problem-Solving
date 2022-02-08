//// Problem Statement

// Given an array of positive integers A, check and return whether the array elements are consecutive or not.
// NOTE: Try this with O(1) extra space.



// Problem Constraints

// 1 <= length of the array <= 100000
// 1 <= A[i] <= 10^9



// Input Format

// The only argument given is the integer array A.



// Output Format

// Return 1 if the array elements are consecutive else return 0.



// Example Input

// Input 1:

//  A = [3, 2, 1, 4, 5]
// Input 2:

//  A = [1, 3, 2, 5]


// Example Output

// Output 1:

//  1
// Output 2:

//  0


// Example Explanation

// Explanation 1:

//  As you can see all the elements are consecutive, so we return 1.
// Explanation 2:

//  Element 4 is missing, so we return 0.


//// Solution - Using sorting - TC: O(NlogN), SC: O(1)
// 1. Sort the array
// 2. Check consecutive elements fro diff 1

var arrayWithConsecutiveElements = (A) => {
    A.sort((a, b) => a - b);

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] !== A[i + 1] - 1) {
            return 0;
        }
    }
    return 1;
}

console.log(arrayWithConsecutiveElements([3, 2, 1, 4, 5]));
console.log(arrayWithConsecutiveElements([1, 3, 2, 5]));