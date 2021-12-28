// Problem Statement
// Given two strings A and B, find if A is a subsequence of B.

// Return "YES" if A is a subsequence of B, else return "NO".

// Ex:
// Input 1:
//     A = "bit"
//     B = "dfbkjijgbbiihbmmt"
// Output 1:
//     YES

// Input 2:
//     A = "apple"
//     B = "appel"
// Output 2:
//     "NO"

// Traverse both A and B from left to right. If we find a matching character, we move ahead in both strings. Otherwise we move ahead only in B.
// if A finishes first return "YES".
// Else return "NO";
var findSubsequence = (A, B) => {
    let j = A.length - 1;
    for (let i = B.length - 1; i >= 0; i--) {
        if (B[i] === A[j]) {
            j--;
        }
    }
    if (j >= 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}

console.log(findSubsequence('bit', 'dfbkjijgbbiihbmmt'));
console.log(findSubsequence('apple', 'appel'));