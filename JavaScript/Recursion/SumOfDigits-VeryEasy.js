//// Problem Statement
// Given a number A, we need to find sum of its digits using recursion

// Input 1:
//  A = 46

// Input 2:
//  A = 11

// Output 1:
//  10    -> 4 + 6
// Output 2:
//  2     -> 1 + 1

//// Solution

var sumOfDigits = (A) => {
    if (A < 1) return 0;

    return (A % 10) + sumOfDigits(Math.floor(A / 10));
};

console.log(sumOfDigits(123));
console.log(sumOfDigits(46));
console.log(sumOfDigits(11));