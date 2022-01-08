//// Problem Statement
// You are given an array of N integers, A1, A2, …. AN.

// Return the maximum value of f(i, j) for all 1 ≤ i, j ≤ N. f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.

// Input 1:

// A = [1, 3, -1]
// Input 2:


// A = [2]

// Output 1:

// 5
// Output 2:

// 0

//// Solution 1 - TC: O(N^2), SC: O(1)
var maximumAbsDifference1 = (A) => {
    let len = BigInt(A.length);
    let max = BigInt(Number.MIN_SAFE_INTEGER);

    for (let i = 0; i < len; i++) {
        let count = BigInt(1);
        for (let j = i + 1; j < len; j++) {
            let sum = BigInt(Math.abs(A[i] - A[j])) + count;
            if (sum > max) {
                max = sum;
            }
            count++;
        }
    }
    return Number(max);
}


//// Solution 2 - TC: O(N), SC: O(1)
var maximumAbsDifference2 = (A) => {
    let max1 = Number.MIN_SAFE_INTEGER,
        min1 = Number.MAX_SAFE_INTEGER,
        max2 = Number.MIN_SAFE_INTEGER,
        min2 = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < A.length; i++) {
        let c1 = A[i] + i;
        let c2 = A[i] - i;

        if (c1 > max1) max1 = c1;
        if (c1 < min1) min1 = c1;
        if (c2 > max2) max2 = c2;
        if (c2 < min2) min2 = c2;
    }

    return Math.max(max1 - min1, max2 - min2);
}

console.log(maximumAbsDifference1([1, 3, -1]));
console.log(maximumAbsDifference2([1, 3, -1]));