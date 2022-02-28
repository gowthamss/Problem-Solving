//// Problem Statement
// Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array.

// More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value.

// If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j.

// Return an array with two elements {A[i], B[j]}.



// Problem Constraints

// 1 <= length of both the arrays <= 100000

// 1 <= A[i], B[i] <= 109

// 1 <= C <= 109



// Input Format

// The first argument given is the integer array A.
// The second argument given is the integer array B.
// The third argument given is integer C.



// Output Format

// Return an array of size 2 denoting the pair which has sum closest to C.



// Example Input

// Input 1:

//  A = [1, 2, 3, 4, 5]
//  B = [2, 4, 6, 8]
//  C = 9
// Input 2:

//  A = [5, 10, 20]
//  B = [1, 2, 30]
//  C = 13


// Example Output

// Output 1:

//  [1, 8]
// Output 2:

//  [10, 2]


// Example Explanation

// Explanation 1:

//  There are three pairs: (1, 8), (3, 6), (5, 4), that gives the minimum value.
//  Since we have to return the value with minimum i and then with minimum j. We will return [1, 8].
// Explanation 2:

//  [10, 2] is the only pair such abs(10+2-13) is minimum.


//// Solution - Using Two Pointers - TC: O(A+B), SC: O(1)

// 1. Initialize two pointers i & j, one at the start of A, and another at the end of B.
// 2. Calculate the sum of A[i] and B[j] and subtract with C.
// 3. If the difference is 0, then that is the minimum possible difference that we could get, so return result.
// 4. If the difference is same as the current min that we have just update the min variable based on the conditions specified in the problem statement.
// 5. If sum is greater then C, then we know that we could get a smaller number by decrementing j, so j--.
// 6. If sum is less than C, then we know that we could get a larger number by incrementing i, so i++.

var closestPairFromSortedArrays = (A, B, C) => {
    let res = [],
        min = Number.MAX_SAFE_INTEGER,
        i = 0,
        j = B.length - 1;

    while (i < A.length && j >= 0) {
        let sum = A[i] + B[j];
        let diff = Math.abs(sum - C);

        if (diff === 0) {
            res[0] = A[i];
            res[1] = B[j];
            return res;
        }

        if (diff < min) {
            min = diff;
            res[0] = A[i];
            res[1] = B[j];
        } else if (diff === min) {
            if (A[i] === res[0]) {
                res[0] = A[i];
                res[1] = B[j];
            }
        }

        if (sum > C) j--;
        else i++;
    }
    return res;
}

console.log(closestPairFromSortedArrays([1, 2, 3, 4, 5], [2, 4, 6, 8], 9));