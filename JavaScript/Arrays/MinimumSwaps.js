//// Problem Statement
// Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.

// Note: It is possible to swap any two elements, not necessarily consecutive.

// Ex:
// Input 1:
//  A = [1, 12, 10, 3, 14, 10, 5]
//  B = 8

// Input 2:
//  A = [5, 17, 100, 11]
//  B = 20

// Output 1:
//  2

// Output 2:
//  1

//// Solution - TC: O(N), SC: O(1)  - Using sliding window
// 1. Iterate over given and count number of elements that are less than or equal to B
// 2. We can consider the number of elements less than B as a window, and count number of elements that are greater than B for the first window and store them in a variable named for example 'bad_nos'
// 3. Iterate over all the windows and remove previous element and add next element. In the process check if the number to be removed is less or greater than B
// 4. If it is greater, then decrement 'bad_nos'
// 5. Also, check for the current elements, if it is greater then increment 'bad_nos'
// 6. After every step compare 'bad_nos' and min we have seen so far and update if it is minimum
// 7. Return min.

// **Note: You can run this code in any browser console.

var minimumSwaps = (A, B) => {
    let numbersLessthanB = 0,
        bad_nos = 0,
        min = Number.MAX_SAFE_INTEGER,
        len = A.length;

    if (len === 1) {
        return A[0];
    }

    for (let i = 0; i < len; i++) {
        if (A[i] <= B) {
            numbersLessthanB++;
        }
    }

    for (let i = 0; i < numbersLessthanB; i++) {
        if (A[i] > B) {
            bad_nos++;
        }
    }

    for (let i = numbersLessthanB; i < len; i++) {
        if (A[i] > B) {
            bad_nos++;
        }
        if (A[i - numbersLessthanB] > B) {
            bad_nos--;
        }
        if (bad_nos < min) {
            min = bad_nos;
        }
    }
    return min !== Number.MAX_SAFE_INTEGER ? min : 0;
}

console.log(minimumSwaps([1, 12, 10, 3, 14, 10, 5], 8));
console.log(minimumSwaps([5, 17, 100, 11], 20));