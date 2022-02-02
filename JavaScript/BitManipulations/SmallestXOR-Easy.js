//// Problem Statement
// Given two integers A and B, find a number X such that A xor X is minimum possible, and the number of set bits in X equals B.

// Input 1:
//  A = 3
//  B = 3

// Input 2:
//  A = 15
//  B = 2

// Output 1:
//  7

// Output 2:
//  12

// Note: You can run this solution in browser console.

//// Solution - TC: O(logN), SC: O(1);
// 1. First find the total number of set bits in A.
// 2. As we have to find the minimum number, if the set bits in A is greater than B, then we need to reduce the set bits in A upto A, so that our answer will be minimum.
// 3. If the set bits in A is less than B, then we need to increase the set bits in A up to B.
// 4. Whenever the set bits are equal to B, then return A.

var smallestXOR = (A, B) => {
    let setBits = 0;

    // Find set bits
    for (let i = 0; i < 32; i++) {
        if ((A & (1 << i)) > 0) {
            setBits++;
        }
    }

    let x = A;
    // Simply return A if setbits are equal to B
    if (setBits === B) {
        return x;
        // if greater, then reduce the number of setbits
    } else if (setBits > B) {
        let diff = setBits - B;
        let i = 0;
        while (diff > 0) {
            if ((x & (1 << i)) > 0) {
                x = (x ^ (1 << i));
                diff--;
            }
            if (diff === 0) {
                return x;
            }
            i++;
        }
        // if lesser then increase the number of setbits
    } else {
        let diff = B - setBits;
        let i = 0;
        while (diff > 0) {
            if ((x & (1 << i)) === 0) {
                x = (x ^ (1 << i));
                diff--;
            }
            if (diff === 0) {
                return x;
            }
            i++;
        }
    }
}

console.log(smallestXOR(3, 3));
console.log(smallestXOR(15, 2));
console.log(smallestXOR(4, 6));