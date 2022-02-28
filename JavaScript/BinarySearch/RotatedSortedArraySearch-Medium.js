//// Problem Statement

// Given a sorted array of integers A of size N and an integer B.

// array A is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2 ).

// You are given a target value B to search. If found in the array, return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// NOTE: Users are expected to solve this in O(log(N)) time.



// Problem Constraints

// 1 <= N <= 1000000

// 1 <= A[i] <= 10^9

// all elements in A are disitinct.



// Input Format

// The first argument given is the integer array A.

// The second argument given is the integer B.



// Output Format

// Return index of B in array A, otherwise return -1



// Example Input

// Input 1:

// A = [4, 5, 6, 7, 0, 1, 2, 3]
// B = 4
// Input 2:

// A = [1]
// B = 1


// Example Output

// Output 1:

//  0
// Output 2:

//  0


//// Solution - TC: O(logN), SC: O(1)
// 1. Find the minimum element in logN time to divide our search space into two sections i.e, the numbers greater than A[0] and numbers less than A[0] in rotated array.
// 2. We can get the minimum element index and use that to search for given elements either in the left or right half.
// 3. Use the minimum element position to search for given element

var search = (A, B) => {
    const pivot = findMin(A);
    let l, r;

    if (pivot === -1) {
        l = 0, r = A.length - 1;
    } else if (B < A[0]) {
        l = pivot;
        r = A.length - 1;
    } else {
        l = 0;
        r = pivot - 1;
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (A[mid] === B) {
            return mid;
        } else if (A[mid] > B) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

var findMin = A => {
    let l = 0,
        r = A.length - 1,
        pivot = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (A[mid] >= A[0]) {
            l = mid + 1;
        } else {
            pivot = mid;
            r = mid - 1;
        }
    }
    return pivot;
}

console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 2));