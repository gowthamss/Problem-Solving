//// Problem Statement

// We define f(X, Y) as number of different corresponding bits in binary representation of X and Y.
// For example, f(2, 7) = 2, since binary representation of 2 and 7 are 010 and 111, respectively. The first and the third bit differ, so f(2, 7) = 2.

// You are given an array of N positive integers, A1, A2 ,..., AN. Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.

// Input 1:
//  A = [1, 3, 5]

// Input 2:
//  A = [2, 3]

// Ouptut 1:
//  8

// Output 2:
//  2


//// Solution1 - Brute Force - TC: O(N^2 logMax), SC: O(1)
// 1. Iterate through all possible pairs and compare each bit position in A[i] and A[j]
// 2. If the are different then increment the counter
// 3. At the end return total number of different bits multiplied by 2, as we are iterating through unique pairs
var differentBitsSumPairwiseBruteForce = (A) => {
    let bits = 0,
        len = A.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = 0; k < 32; k++) {
                if (checkSetBit(A[i], k) !== checkSetBit(A[j], k)) {
                    bits++;
                }
            }
        }
    }

    return (bits * 2) % 1000000007;
}


//// Solution2 - Optimal - TC: O(N logMax), SC: O(1)
// 1. If we write down all the array elements one by one, we can observe that we can form different bit pairs with all the 1's with 0's
// 2. For example, if we have 10 array elements and for each elements at position 'i' we have four 1's. Then other six are 0's.
// 3. All the four 1's can form pairs with all the six 0's. So we can have a total of 6 * 4 = 24 combinations.
// 4. We add up all these calculations at every 'i' position
// 5. Finally return answer * 2, as we have pairs (i==j) & (j==i)
var differentBitsSumPairwiseOptimal = (A) => {
    let bits = 0,
        len = A.length;
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let j = 0; j < len; j++) {
            if (checkSetBit(A[j], i) > 0) {
                count++;
            }
        }
        if (count > 0) {
            bits += count * (len - count);
        }
    }

    return (bits * 2) % 1000000007;
}

var checkSetBit = (A, k) => {
    return (A & (1 << k));
}


console.log(differentBitsSumPairwiseBruteForce([1, 3, 5]));
console.log(differentBitsSumPairwiseOptimal([1, 3, 5]));