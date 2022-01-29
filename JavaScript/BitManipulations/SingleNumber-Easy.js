//// Problem Statement
// Given an array of integers A, every element appears twice except for one. Find that single one.

// NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example Input
// Input 1:
//  A = [1, 2, 2, 3, 1]

// Input 2:
//  A = [1, 2, 2]

// Example Output
// Output 1:
//  3

// Output 2:
//  1

//// Solution 1
// Approach is to create a hasmap and store the frequencies of all the elements in the array.
// Then iterate over hashmap to find the element which has frequency 1.
// This method's TC: O(N), SC: O(N)

//// Solution 1 - Using Bit Manipulation
// 1. If we use xor(^) operation on all the elements of the array, then only the single number will be remained and all others will be 0's
// 2. As every element is appearing twice, xor of them will get cancelled out.
// Ex: A ^ A = 0
// 3. So we are left with 0 and single number. If we take xor on them it will be the single number
// Ex: 0 ^ A = A

var singleNumber = (A) => {
    let ans = 0;

    for (let i = 0; i < A.length; i++) {
        ans = ans ^ A[i];
    }
    return ans;
}

console.log(singleNumber([1, 2, 2, 3, 1]));