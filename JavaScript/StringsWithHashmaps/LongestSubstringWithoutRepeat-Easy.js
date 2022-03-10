//// Problem Statement
// Given a string A, find the length of the longest substring without repeating characters.

// Note: Users are expected to solve in O(N) time complexity.



// Problem Constraints

// 1 <= size(A) <= 106

// String consists of lowerCase,upperCase characters and digits are also present in the string A.



// Input Format

// Single Argument representing string A.



// Output Format

// Return an integer denoting the maximum possible length of substring without repeating characters.



// Example Input

// Input 1:

//  A = "abcabcbb"
// Input 2:

//  A = "AaaA"


// Example Output

// Output 1:

//  3
// Output 2:

//  2


// Example Explanation

// Explanation 1:

//  Substring "abc" is the longest substring without repeating characters in string A.
// Explanation 2:

//  Substring "Aa" or "aA" is the longest substring without repeating characters in string A.

//// Solution - Using hashmap - TC: O(N), SC: O(N)
var longestSubstringWithoutRepeat = (A) => {
    let len = A.length;

    if (len === 1) return len;

    let i = 0,
        j = 0,
        lookup = new Map(),
        max = Number.MIN_SAFE_INTEGER;

    while (j < len) {
        let val = A[j];
        if (lookup.get(val) >= 0) {
            if (j - i > max) {
                max = j - i;
            }

            for (let k = i; k < j; k++) {
                lookup.delete(A[k]);
                if (A[k] === val) {
                    i = k + 1;
                    break;
                }
            }
        } else {
            lookup.set(val, j);
            j++;

            if (j === len) {
                if (j - i > max) {
                    max = j - i;
                }
            }
        }
    }

    return max;
}

console.log(longestSubstringWithoutRepeat('aebcabgeb@#gbkdb#'));