//// Problem Statement
// Given a number A, check if it is a magic number or not.

// A number is said to be a magic number, if the sum of its digits are calculated till a single digit recursively by adding the sum of the digits after every addition. If the single digit comes out to be 1, then the number is a magic number.

// Input 1:
//  A = 83557

// Input 2:
//  A = 1291

// Output 1:
//  1

// Output 2:
//  0

// Explanation 1:
//  Sum of digits of (83557) = 28
//  Sum of digits of (28) = 10
//  Sum of digits of (10) = 1. 
//  Single digit is 1, so it's a magic number. Return 1.

// Explanation 2:
//  Sum of digits of (1291) = 13
//  Sum of digits of (13) = 4
//  Single digit is not 1, so it's not a magic number. Return 0.

//// Solution

var isMagic = (A) => {
    if (A < 10) {
        if (A === 1)
            return 1;
        else
            return 0;
    } else {
        A = sumOfDigits(A);
        return isMagic(A);
    }
}

var sumOfDigits = (A) => {
    let res = 0;

    while (A >= 1) {
        res += A % 10;
        A = Math.floor(A / 10);
    }
    return res;
}

console.log(isMagic(83557));
console.log(isMagic(1291));