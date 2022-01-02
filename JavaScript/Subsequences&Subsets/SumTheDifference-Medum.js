// Problem Statement
// Given an integer array A of size N.
// You have to find all possible non-empty subsequence of the array of numbers and then, for each subsequence, find the difference between the largest and smallest numbers in that subsequence Then add up all the differences to get the number.

// As the number may be large, output the number modulo 1e9 + 7 (1000000007).

// NOTE: Subsequence can be non-contiguous.

// Ex:
// Input 1:

// A = [1, 2]       -- Subarrays = {1} {1,2} {2}
// Input 2:

// A = [1]
// Output 1:

//  1
// Output 2:

//  0


//// Soultion 1
// Generate all possible subseqences and find the diff of max and min of each subsequence.

var sumTheDifference = (A) => {
    // Initializing a BigInt to handle overflows
    let subsequenceDiff = BigInt(0);

    // We are going to have 2 to the power of N subsequences for a given array.
    // so iterate till 2 to the power of N(A.length)
    // here we are iterating from 1 to avoid empty subsequence
    for (let i = 1; i < Math.pow(2, A.length); i++) {
        let eachSubsequence = [];
        // For every binary representation of a number like starting from 0,1,2,3...
        // we can find the elements in the input array by using set bits in that particular number and form subsequence
        for (let j = 0; j < A.length; j++) {
            // Check which bit is set, if set push that number as one of the element in the subsequence
            if (checkSetBit(i, j)) {
                eachSubsequence.push(A[j]);
            }
        }
        subsequenceDiff += (BigInt(Math.max(...eachSubsequence)) - BigInt(Math.min(...eachSubsequence)));
    }
    return Number(subsequenceDiff % BigInt(1000000007));
}

var checkSetBit = (i, j) => {
    return (i & (1 << j)) === 0 ? false : true;
}

//// Solution 2
// By contribution method and sorting
// This methods works in the way that we find each elements contribution as max element
// and min element in all possible subsets then find the diff of them and add to total sum.
var sumTheDifference2 = (A) => {
    var subsequenceDiffSum = BigInt(0),
        max = BigInt(0),
        min = BigInt(0);
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
        // After sorting each element appears 2^i times as max
        max = (BigInt(Math.pow(2, i)) * BigInt(A[i]));
        // After sorting each element appears 2^(A.length - i - 1) times as min
        min = (BigInt(Math.pow(2, A.length - i - 1)) * BigInt(A[i]));
        subsequenceDiffSum = subsequenceDiffSum + (max - min);
    }
    return Number(subsequenceDiffSum % BigInt(1000000007));
}

console.log(sumTheDifference([1, 2]))
console.log(sumTheDifference([1, 2, 3, 4, 5]))
console.log(sumTheDifference2([1, 2, 3, 4, 5]))