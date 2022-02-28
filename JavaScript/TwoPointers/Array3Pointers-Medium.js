//// Problem Statement
// You are given 3 sorted arrays A, B and C.

// Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

// Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).



// Problem Constraints

// 0 <= len(A), len(B), len(c) <= 106

// 0 <= A[i], B[i], C[i] <= 107



// Input Format

// First argument is an integer array A.

// Second argument is an integer array B.

// Third argument is an integer array C.



// Output Format

// Return an single integer denoting the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).



// Example Input

// Input 1:

//  A = [1, 4, 10]
//  B = [2, 15, 20]
//  C = [10, 12]
// Input 2:

//  A = [3, 5, 6]
//  B = [2]
//  C = [3, 4]


// Example Output

// Output 1:

//  5
// Output 2:

//  1


// Example Explanation

// Explanation 1:
//  With 10 from A, 15 from B and 10 from C.

// Explanation 2:
//  With 3 from A, 2 from B and 3 from C.


//// Solution - Using Three Pointer - TC: O(A+B+C), SC: O(1)

// 1. Start three pointers from 0 for each array.
// 2. To get the max out of 3 array values we need maximum and minimum elements.
// 3. Check that max value with the current minimum value we have. If it is less than replace it.
// 4. So, now we have to find a max which can be less than current min. We can get that by incrementing in the array where the minimum element lies.
// 5. Repeat the same process till we find minimum of maximum.

var array3Pointers = (A, B, C) => {
    let min = Number.MAX_SAFE_INTEGER,
        diff = 0;
    let i = 0,
        j = 0,
        k = 0;

    while (i < A.length && j < B.length && k < C.length) {
        const localMax = Math.max(A[i], B[j], C[k]);
        const localMin = Math.min(A[i], B[j], C[k]);

        diff = localMax - localMin;

        if (diff < min) {
            min = diff;
        }

        if (localMin === A[i]) i++;
        else if (localMin === B[j]) j++;
        else k++;
    }

    return min;
}

console.log(array3Pointers([1, 4, 10], [2, 15, 20], [10, 12]));