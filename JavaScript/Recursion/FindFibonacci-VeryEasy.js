//// Problem Statement
// The Fibonacci numbers are the numbers in the following integer sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

// In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation:

// Fn = Fn-1 + Fn-2

// Given a number A, find and return the Ath Fibonacci Number.

// Given that F0 = 0 and F1 = 1.


//// Solution - TC: O(2^N), SC: O(N)

var findFibonacci = (A) => {
    if (A === 0) return 0;
    if (A === 1) return 1;

    return findFibonacci(A - 1) + findFibonacci(A - 2);
}

console.log(findFibonacci(10));
console.log(findFibonacci(20));