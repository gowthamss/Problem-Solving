//// Problem Statement

// Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.


// Example Input

// Input 1:

// A = [4, 7, 9 ]
// B = [2 ,11, 19 ]
// Input 2:

// A = [1]
// B = [2]


// Example Output

// Output 1:

// [2, 4, 7, 9, 11, 19]
// Output 2:

// [1, 2]


// Example Explanation

// Explanation 1:

// Merging A and B produces the output as described above.
// Explanation 2:

//  Merging A and B produces the output as described above.


//// Solution - Using the fact that input arays are sorted - TC: O(N+M), SC: O(N+M)
// It is pretty easy to understand directly from code



//// **Note: You can run this in browser console.

var mergeTwoSortedArrays = (A, B) => {
    if (!A.length || !A) return B;
    if (!B.length || !B) return A;

    let i = 0,
        j = 0,
        c = 0,
        res = [],
        lenA = A.length,
        lenB = B.length;

    while (i < lenA && j < lenB) {
        if (A[i] < B[j]) {
            res.push(A[i]);
            i++;
        } else if (A[i] >= B[j]) {
            res.push(B[j]);
            j++;
        }
        c++;
    }

    while (i < lenA) {
        res.push(A[i]);
        i++;
        c++;
    }

    while (j < lenB) {
        res.push(B[j]);
        j++;
        c++;
    }

    return res;
}

console.log(mergeTwoSortedArrays([4, 7, 9], [2, 11, 19]));