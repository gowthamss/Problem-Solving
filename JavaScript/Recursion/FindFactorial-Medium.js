//// Problem Statement

// Write a program to find the factorial of the given number A.

//// Solution - TC: O(N), SC: O(N)

var findFactorial = (A) => {
    if (A === 0) {
        return 1;
    }

    return A * findFactorial(A - 1);
}

console.log(findFactorial(10));
console.log(findFactorial(20));