//// Problem Description
// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.

// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.

// Input 1:
// A = ["dig1-8-1-5-1", "let1-art-can", "dig2-3-6", "let2-own-kit-dig", "let3-art-zero"]

// Input 2:
// A = ["a1-9-2-3-1","g1-act-car","zo4-4-7","ab1-off-key-dog","a8-act-zoo"]

// Output 1:
// ["let1-art-can","let3-art-zero","let2-own-kit-dig","dig1-8-1-5-1","dig2-3-6"]

// Output 2:
// ["g1-act-car", "a8-act-zoo", "ab1-off-key-dog", "a1-9-2-3-1", "zo4-4-7"]


// Explanation 1:
// The letter-log contents are all different, so their ordering is "art-can", "art-zero", "own-kit-dig".
// The digit-logs have a relative order of "dig1-8-1-5-1", "dig2-3-6".


//// Solution - TC: O(N^2), SC: O(N)

//// Approach
// 1. Store all letter elements in a array and number elements in a separate array.
// 2. Now write a comparator function to sort letter array based on the given conditions.
// 3. Concatenate leeter array and number array.

// **Note: You can run this code in any browser console.

var reorderDataInLogFiles = (A) => {
    let letters = [];
    let numbers = [];
    let arrayLen = A.length;

    for (let i = 0; i < arrayLen; i++) {
        let strLen = A[i].length;
        let currChar = A[i][strLen - 1];
        if (currChar >= 'a' && currChar <= 'z') {
            letters.push(A[i]);
        } else {
            numbers.push(A[i]);
        }
    }

    letters.sort((a, b) => {
        let modA = a.split('-');
        let modB = b.split('-');
        let len = modA.length < modB.length ? modA.length : modB.length;
        let count = 1;
        for (let i = 1; i < len; i++) {
            count++;
            if (modA[i] < modB[i]) {
                return -1;
            } else if (modA[i] > modB[i]) {
                return 1;
            }
        }
        if (count === len) {
            if (modA.length < modB.length) {
                return -1;
            } else if (modA.length > modB.length) {
                return 1;
            } else {
                if (modA[0] < modB[0]) {
                    return -1;
                }
                if (modA[0] > modB[0]) {
                    return 1;
                }
                return 0;
            }
        }
    });

    return [...letters, ...numbers];
}

console.log(reorderDataInLogFiles(["dig1-8-1-5-1", "let1-art-can", "dig2-3-6", "let2-own-kit-dig", "let3-art-zero"]));
console.log(reorderDataInLogFiles(["a1-9-2-3-1", "g1-act-car", "zo4-4-7", "ab1-off-key-dog", "a8-act-zoo"]));