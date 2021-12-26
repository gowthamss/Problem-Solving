// Problem Statement
// You have given a string A having Uppercase English letters.

// You have to find that how many times subsequence "AG" is there in the given string.

// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

// Ex:
// A = "ABCGAG" -> 3
// A = "GAB" -> 0
// A = "GBCADAGGKALG"

//// Solution 1 - Brute Force
// Loop throgh the string and for every A find how many G's are there in the sequence and add that to result.
// TC: O(n^2)  SC: O(1)

var specialSubsequencesAG = (A) => {
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 'A') {
            for (let j = i + 1; j < A.length; j++) {
                if (A[j] === 'G') {
                    count++;
                }
            }
        }
    }
    return count; // Divide the count by 10^9 + 7 for large inputs
}

//// Solution 2 - By simple obervation
// The observation is that, if we encounte a 'G' in the string, then there exists 'A' number of subsequences till that 'G'
// For ex, in the following 'ABCGAG', there is one 'A' before the first 'G'(count=1) and two 'A's before second 'G'(count=1+2=3)

var specialSubsequencesAG = (A) => {
    let AGcount = 0,
        Acount = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 'A') {
            Acount++;
        }
        if (A[i] === 'G') {
            AGcount += Acount;
        }
    }
    return AGcount;
}

console.log(specialSubsequencesAG('ABCGAG'));
console.log(specialSubsequencesAG('GBCADAGGKALG'));
console.log(specialSubsequencesAG('GAB'));