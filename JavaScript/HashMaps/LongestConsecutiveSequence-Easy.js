//// Problem Statement

// Given an unsorted integer array A of size N.

// Find the length of the longest set of consecutive elements from the array A.



// Problem Constraints

// 1 <= N <= 106

// -106 <= A[i] <= 106



// Input Format

// First argument is an integer array A of size N.



// Output Format

// Return an integer denoting the length of the longest set of consecutive elements from the array A.



// Example Input

// Input 1:

// A = [100, 4, 200, 1, 3, 2]
// Input 2:

// A = [2, 1]


// Example Output

// Output 1:

//  4
// Output 2:

//  2


// Example Explanation

// Explanation 1:

//  The set of consecutive elements will be [1, 2, 3, 4].
// Explanation 2:

//  The set of consecutive elements will be [1, 2].


//// Solution 1 - Using sorting - TC: O(nlogn), SC: O(1)

// 1. Create a set using the given array first. Then just sort the array and check for consecutive elements and update the max.

var longestConsecutiveSequenceSorting = A => {
    let len = A.length;

    if (len === 1) return 1;

    A = Array.from(new Set(A));
    A.sort((a, b) => a - b);


    let i = 0,
        j = 0,
        maxLength = 1;

    while (j < len) {
        if (A[j] + 1 === A[j + 1]) {
            j++;
        } else {
            if (i < j) {
                let diff = j - i + 1;

                if (diff > maxLength) maxLength = diff;

            }
            j++;
            i = j;
        }
    }
    return maxLength;
}


//// Solution 2 - Hashing - TC: O(N), SC: O(N)

// 1. Create set using given array.
// 2. Check for consectiveness on set.

var longestConsecutiveSequenceSet = A => {
    let ans = 0;
    const set = new Set(A);

    for (let val of A) {
        if (!set.has(val - 1)) {
            let l = 0;

            while (set.has(val++)) {
                ++l;
            }
            ans = Math.max(ans, l);
        }
    }
    return ans;
}

console.log(longestConsecutiveSequenceSorting([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequenceSet([100, 4, 200, 1, 3, 2]));