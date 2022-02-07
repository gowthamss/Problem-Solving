//// Problem Statement

// Given a sequence f(A) = f(A-1) + f(A-2) + f(A-3) + A . Calculate the Ath term of the sequence.

// Given f(0)=1; f(1)=1; f(2)=2;


// Input 1:
//  3

// Input 2:
//  2

// Output 1:
//  7

// Output 2:
//  2


//// Solution - TC: O(N), SC: O(N)

var solve = (A) => {
    if (A === 0 || A === 1) {
        return 1;
    }
    if (A === 2) return 2;

    return A + solve(A - 1) + solve(A - 2) + solve(A - 3);
}

console.log(solve(5));
console.log(solve(8));
console.log(solve(4));