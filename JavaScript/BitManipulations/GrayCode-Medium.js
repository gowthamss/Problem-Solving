//// Problem Statement
// The gray code is a binary numeral system where two successive values differ in only one bit.

// Given a non-negative integer A representing the total number of bits in the code, print the sequence of gray code.

// A gray code sequence must begin with 0.


// Input 1:
// A = 2

// Input 1:
// A = 1

// output 1:
// [0, 1, 3, 2]

// output 2:
// [0, 1]

// Explanation 1:

// for A = 2 the gray code sequence is:
//     00 - 0
//     01 - 1
//     11 - 3
//     10 - 2
// So, return [0,1,3,2].
// Explanation 1:

// for A = 1 the gray code sequence is:
//     00 - 0
//     01 - 1
// So, return [0, 1].

//// Solution - Using Recursion - TC: O(2^N), SC: O(N)

var grayCode = (A) => {
    if (A === 1) return [0, 1];

    let subAns = grayCode(A - 1);
    let size = subAns.length;

    // At each call, traverse from back of the array and add each array element with a number equal to (1<<(A-1))
    // Ex: [0,1] -> [0,1,1+2, 0+2] -> [0,1,3,2]
    for (let i = size - 1; i >= 0; i--) {
        let elem = subAns[i] + (1 << (A - 1));
        subAns.push(elem);
    }
    return subAns;
}

console.log(grayCode(3));
console.log(grayCode(4));