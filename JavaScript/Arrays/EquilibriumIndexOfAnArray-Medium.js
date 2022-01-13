//// Problem Statement
// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// NOTE:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

// Input 1:
// A=[-7, 1, 5, 2, -4, 3, 0]

// Input 2:
// A=[1,2,3]

// Output 1:
// 3

// Output 2:
// -1


//// Solution - Using prefix sum - TC: O(N), SC: O(N) (We can also solve this without O(N) space by maintaining two variables).
// 1. Create two arrays, one stores prefix sum of array elements and other stores suffix sum of elements(from back).
// 2. Now, iterate over given array and check if (i-1)th element in prefix array and (i+1)th element in suffix array is equal.
// 3. If we can find a match immediately return the index as we have to return minimum index if there are multiple such indices.
// 4. Else return -1.

// **Note: You can run this code in any browser console.

var equilibriumIndex = (A) => {
    let psum = [],
        ssum = [],
        len = A.length;
    let count = 0;

    // For edge case [0,0,0,0,0,0]
    for (let i = 0; i < len; i++) {
        if (A[i] === 0) {
            count++;
        }
    }
    if (count === len) {
        return 0;
    }

    psum[0] = A[0];
    ssum[len - 1] = A[len - 1];

    for (let i = 1; i < len; i++) {
        psum[i] = psum[i - 1] + A[i];
    }
    for (let i = len - 2; i >= 0; i--) {
        ssum[i] = ssum[i + 1] + A[i];
    }

    for (let i = 1; i < len - 1; i++) {
        if (psum[i - 1] === ssum[i + 1]) {
            return i;
        }
    }
    return -1;
}

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(equilibriumIndex([1, 2, 3]));