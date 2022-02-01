//// Problem Statement
// Given an array of numbers A , in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Note: Output array must be sorted.

// Input 1:
// A = [1, 2, 3, 1, 2, 4]

// Input 2:
// A = [1, 2]

// Output 1:
// [3, 4]

// Output 2:
// [1, 2]

var singleNumber3 = (A) => {
    let xor = 0,
        ans1 = 0,
        ans2 = 0,
        pos = 0,
        len = A.length;

    // Find xor of all the array elements
    for (let i = 0; i < len; i++) {
        xor = xor ^ A[i];
    }

    // Find the setbit position in above xor result
    let m = xor;
    for (let i = 0; i < 32; i++) {
        if ((m >> i) & 1 === 1) {
            pos = i;
            break;
        }
    }

    // Based on the position obtained, divide the numbers based on the position of that elements and xor them
    for (let i = 0; i < len; i++) {
        if ((A[i] & (1 << pos)) >= 1) {
            ans1 = ans1 ^ A[i];
        } else {
            ans2 = ans2 ^ A[i];
        }
    }

    return ans1 > ans2 ? [ans2, ans1] : [ans1, ans2];
}

console.log(singleNumber3([1, 2, 3, 1, 2, 4]));
console.log(singleNumber3([1, 2]));