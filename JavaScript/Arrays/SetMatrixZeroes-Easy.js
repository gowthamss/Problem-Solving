//// Problem Statement
// Given a matrix, A of size M x N of 0s and 1s. If an element is 0, set its entire row and column to 0.
// Note: This will be evaluated on the extra memory used. Try to minimize the space and time complexity.

// Examples:

// Input 1:
//     [   [1, 0, 1],
//         [1, 1, 1], 
//         [1, 1, 1]   ]


// Output 1:
//     [   [0, 0, 0],
//         [1, 0, 1],
//         [1, 0, 1]   ]

// Input 2:
//     [   [1, 0, 1],
//         [1, 1, 1],
//         [1, 0, 1]   ]



// Output 2:
//     [   [0, 0, 0],
//         [1, 0, 1],
//         [0, 0, 0]   ]


//// Solution  - TC: O(M*N), SC: O(M+N)
// Approach is to have two array rows and cols
// and iterate over input array and store the row number in rows and column number in cols where there is a 0.
// Now, iterate over the input array again with rows array and make all the row values to 0's of rows[i].
// And iterate over the input array again with cols aray and make all the col values to 0's of cols[i].

// **Note: You can run this code in any browser console.

var setMatrixZeroes = (A) => {
    let rows = [],
        cols = [],
        len = A.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 0) {
                if (!rows.includes(i)) {
                    rows.push(i);
                }
                if (!cols.includes(j)) {
                    cols.push(j);
                }
            }
        }
    }

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            A[rows[i]][j] = 0;
        }
    }

    for (let i = 0; i < cols.length; i++) {
        for (let j = 0; j < len; j++) {
            A[j][cols[i]] = 0;
        }
    }
    return A;
}

console.log(setMatrixZeroes([
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1]
]));
console.log(setMatrixZeroes([
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1]
]));