//// Problem Statement
// Given a matrix of integers A of size N x M and an integer B.
// In the given matrix every row and column is sorted in increasing order. Find and return the position of B in the matrix in the given form:
// If A[i][j] = B then return (i * 1009 + j)
// If B is not present return -1.

// Note 1: Rows are numbered from top to bottom and columns are numbered from left to right.
// Note 2: If there are multiple B in A then return the smallest value of i*1009 +j such that A[i][j]=B.

// Example Input

// A = [ [1, 2, 3]
//       [4, 5, 6]
//       [7, 8, 9] ]
// B = 2

// Example Output
// 1011


//// Solution - TC: O(M+N) or (N+M), SC: O(1)
// 1. As the elements in the matrix are sorted, we can use that to find the given element in O(M+N) time.
// 2. If we observe the top right corner element, it has elements less than it to the left of it and elements greater than it to the bottom of it.
// 3. So if we compare A[i][j] < B then we can ignore row, if A[i][j] > B then we can ignore column.
// 4. If we find a match, then we store the value in a min variable.
// 5. As it is mentioned in the question that we need to find minimum value if there are multiple instances of B in A, we need to continue looking for further instances of B.
// 6. We can find minimum by only going through the row(to left) in which we have found our first instance, because if we go down we increment 'i' hence our answer will be maximum(due to multiplication with 1009*).
// If we go left in the same row, then 'i' will be constant and 'j' will be decremented by 1, so we get the minimum value.

// **Note: You can run this code in any browser console.

var searchInMatrix = (A, B) => {
    let i = 0,
        j = A[0].length - 1,
        min = Number.MAX_SAFE_INTEGER;

    while (i < A.length && j >= 0) {
        let currEl = A[i][j];
        if (currEl > B) {
            j--;
        } else if (currEl < B) {
            i++;
        } else {
            let val = ((i + 1) * 1009) + (j + 1);
            if (val < min) {
                min = val;
            }
            j--;
        }
    }
    return min !== Number.MAX_SAFE_INTEGER ? min : -1;
}


console.log(searchInMatrix([
    [1, 2, 2],
    [3, 4, 5],
    [3, 7, 8]
], 3));