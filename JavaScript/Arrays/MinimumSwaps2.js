//// Problem Statement
// Given an array of integers A of size N that is a permutation of [0, 1, 2, …, (N-1)]. It is allowed to swap any two elements (not necessarily consecutive).

// Find the minimum number of swaps required to sort the array in ascending order.

// Ex:
// Input 1:
// A = [1, 2, 3, 4, 0]

// Input 2:
// A = [2, 0, 1, 3]

// Output 1:
// 4

// Output 2:
// 2

//// Solution - TC: O(N), SC: O(1)
// 1. This problem is a simple observation problem
// 2. As the array only contains numbers from 0 to N, we can use this to swap numbers to their respective positions(if they are not in respective position same as its index) and increment count when we swap
// 3. It the element is same as its index then increment 'i'

var minimumSwaps2 = (A) => {
    let count = 0,
        i = 0;

    while (i < A.length) {
        if (A[i] !== i) {
            let temp = A[A[i]];
            A[A[i]] = A[i];
            A[i] = temp;
            count++;
        } else {
            i++;
        }
    }
    return count;
}

console.log(minimumSwaps2([1, 2, 3, 4, 0]));
console.log(minimumSwaps2([2, 0, 1, 3]));