// Given two integer array A and B of size N and M respectively. Your task is to find all the common elements in both the array.

// NOTE:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Ex: 
// A = [1,2,2,1]
// B = [2,3,1,2]

// Output: [1,2,2]

//// Solution 1 - Using sorting -  // TC: O(nlogn) // SC: O(n)
// 1. Sort both A and B
// 2. Create two pointers like i and j.
// 3. Loop through till i is less than length of A and j is less than length of B.
// 4. And check if A[i] === B[j]. If yes, then add either A[i] or B[j] to the result and increment both i and j.
// 5. Else if, A[i] < B[j], then increment i.
// 6. Else if, A[i] > B[j], then increment j.

var commonElements = (A, B) => {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let i = 0,
        j = 0,
        result = [];

    while (i < A.length && j < B.length) {
        if (A[i] === B[j]) {
            result.push(A[i]);
            i++;
            j++;
        } else if (A[i] < B[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}

//// Solution 2 - Using Hashing // TC: O(n) // SC: O(n)
var commonElements = (A, B) => {
    let lookup = {},
        result = [];

    for (let val of A) {
        if (lookup[val]) {
            lookup[val] += 1;
        } else {
            lookup[val] = 1;
        }
    }

    for (let val of B) {
        if (lookup[val] > 0) {
            result.push(val);
            lookup[val] -= 1;
        }
    }
    return result;
}

console.log(commonElements([1, 2, 2, 1], [2, 3, 1, 2]));