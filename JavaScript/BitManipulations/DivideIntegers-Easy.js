//// Problem Statement
// Divide two integers without using multiplication, division and mod operator.

// Return the floor of the result of the division.

// Also, consider if there can be overflow cases i.e output is greater than INT_MAX, return INT_MAX.

// NOTE: INT_MAX = 2^31 - 1

// Input 1:
//  A = 5
//  B = 2

// Input 2:
//  A = 7
//  B = 1

// Output 1:
//  2

// Output 2:
//  7

//// Solution - TC: O(logMax) - SC: O(1)

var divideIntegers = (A, B) => {
    if (A < 0 && B == -1) return -(A - B);

    let n = BigInt(A);
    let m = BigInt(B);

    let sign = BigInt(1);

    if (n < 0) {
        sign = -sign;
    }
    if (m < 0) {
        sign = -sign;
    }

    if (n < BigInt(0)) {
        n = -n;
    }
    if (m < BigInt(0)) {
        m = -m;
    }

    let q = BigInt(0);

    for (let i = BigInt(31); i >= 0; i--) {
        if ((m << i) <= n) {
            n -= (m << i);
            q = q | (BigInt(1) << i);
        }
    }

    if (sign < 0) {
        q = -q;
    }

    if (q > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
    } else {
        return Number(q);
    }
}

console.log(divideIntegers(5, 2));
console.log(divideIntegers(7, 1));