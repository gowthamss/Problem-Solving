//// Problem Statement

// Find the Bth smallest element in given array A .

// NOTE: Users should try to solve it in <= B swaps.



// Problem Constraints

// 1 <= |A| <= 100000

// 1 <= B <= min(|A|, 500)

// 1 <= A[i] <= 109



// Input Format

// First argument is vector A.

// Second argument is integer B.



// Output Format

// Return the Bth smallest element in given array.



// Example Input

// Input 1:

// A = [2, 1, 4, 3, 2]
// B = 3
// Input 2:

// A = [1, 2]
// B = 2


// Example Output

// Output 1:

//  2
// Output 2:

//  2


// Example Explanation

// Explanation 1:

//  3rd element after sorting is 2.
// Explanation 2:

//  2nd element after sorting is 2.

//// Solution - Finding min and swapping elements - TC: O(NK), SC: O(1)
// 1. As we have return the Bth min, start first loop till B
// 2. Start the second loop from i to len, and find min in each subarray.
// 3. Swap the min element with A[i] and A[i] to the position where min is spotted
// 4. Return res[B-1];

//// **Note: You can run this in browser console.

var kthsmallest = (A, B) => {
    let len = A.length;

    for (let i = 0; i < B; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        let idx = i;
        for (let j = i; j < len; j++) {
            if (A[j] < min) {
                min = A[j];
                idx = j;
            }
        }

        let temp = A[idx];
        A[idx] = A[i];
        A[i] = min;
    }
    return A[B - 1];
}

console.log(kthsmallest([2, 1, 4, 3, 2], 3));