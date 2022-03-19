//// Problem Statement

// You are given a string A.

// An operation on the string is defined as follows:

// Remove the first occurrence of the same consecutive characters. eg for a string "abbcd", the first occurrence of same consecutive characters is "bb".

// Therefore the string after this operation will be "acd".

// Keep performing this operation on the string until there are no more occurrences of the same consecutive characters and return the final string.



// Problem Constraints
// 1 <= |A| <= 100000



// Input Format
// First and only argument is string A.



// Output Format
// Return the final string.



// Example Input
// Input 1:

//  A = abccbc
// Input 2:

//  A = ab


// Example Output
// Output 1:

//  "ac"
// Output 2:

//  "ab"


// Example Explanation
// Explanation 1:

// Remove the first occurrence of same consecutive characters. eg for a string "abbc", 
// the first occurrence of same consecutive characters is "bb".
// Therefore the string after this operation will be "ac".
// Explanation 2:

//  No removals are to be done.

//// Solution - Using Stacks - TC: O(N), SC: O(N)

// 1. Store the elements from the back of A into the stack.
// 2. While doing so check the top element of the stack and compare it with the current char in A.
// 3. If they both match then pop the top element from the stack.
// 4. Else store the element in stack.
// 5. Finally, iterate over stack and append each element to a string and return.

//// **Note: You can run this in browser console.

var doubleCharacterTrouble = (A) => {
    const stack = [];
    const len = A.length;

    for (let i = len - 1; i >= 0; i--) {
        if (i === len - 1) stack.push(A[i]);
        else {
            const stackLen = stack.length;
            const stackTop = stack[stackLen - 1];

            if (stackTop !== A[i]) stack.push(A[i]);
            else stack.pop();
        }
    }

    let res = '';

    stackLen = stack.length;
    for (let i = 0; i < stackLen; i++) {
        const popped = stack.pop();
        res += popped;
    }

    return res;
}

console.log(doubleCharacterTrouble('abbcd'));
console.log(doubleCharacterTrouble('abccfehhea'));