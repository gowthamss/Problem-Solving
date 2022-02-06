//// Problem Statement
// Given a positive integer A, the task is to count the total number of set bits in the binary representation of all the numbers from 1 to A.

// Return the count modulo 109 + 7.

// Input 1:
//  A = 3

// Input 2:
//  A = 10

// Output 1:
//  4

// Output 2:
//  17

//// Solution - Brute Force - TC: O(N logMax), SC: O(1)
// 1. Simply iterate from 1 t0 32(int range) and through the array to count 1's at each 'i'th positon of array element

var countNumberOfSetBitsBruteForce = (A) => {
    let count = 0;

    for (let i = 0; i < 32; i++) {
        for (let j = 1; j <= A; j++) {
            let isSetBit = (j & (1 << i));

            if (isSetBit > 0) {
                count++;
            }
        }
    }
    return count % (Math.pow(10, 9) + 7);
}

//// Solution - Optimal using observation - TC: O(logMax), SC: O(1)
// 1. For each bit position in A[i] we can observe one pattern that if A = 1, the the pattern is [01][01][01]...
// 2. If A = 2, we can observe [0011][0011]...
// 3. Based on this we can derive a formula to count number of set bits.

var countNumberOfSetBitsOptimal = (A) => {
    A = BigInt(A);
    let count = BigInt(0);
    let one = BigInt(1);

    for (let i = BigInt(0); i < 32; i++) {
        // This is to check how many sets of same numbers we can form for a 'i'th bit positon
        count += BigInt(Math.floor(Number(((A + one) / (one << (i + one)))))) * (one << i);
        // This check how many 1 bits are present in the remaining bits which cannot form a complete set
        let remainingOnes = ((A + one) % (one << (i + one))) - (one << i);
        if (remainingOnes > 0) {
            count += remainingOnes;
        }
    }
    return Number(count % BigInt((Math.pow(10, 9) + 7)));
}

console.log(countNumberOfSetBitsBruteForce(10));
console.log(countNumberOfSetBitsOptimal(10));