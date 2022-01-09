//// Problem Statement

// Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

// The digits are stored such that the most significant digit is at the head of the list.

// NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: for this problem, following are some good questions to ask :

// Q : Can the input have 0's before the most significant digit. Or in other words, is 0 1 2 3 a valid input?
// A : For the purpose of this question, YES
// Q : Can the output have 0's before the most significant digit? Or in other words, is 0 1 2 4 a valid output?
// A : For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.

// Ex:
// Input 1:
// [1, 2, 3]

// Input 2:
// [9,9,9]


// Output 1:
// [1, 2, 4]
// Output 2:
// [1, 0, 0, 0]

//// Solution - TC: O(N), SC: O(1)
// This qeuestion is entirely observation based.
// As we need to add 1 to the entire number as a whole, 
// 1. If the last element in the array is less than 9(<9), then we can simply increment that number by 1
// Else if the last element is 9, we need to keep checking for 9's further down the array
// And when we find the last sequential 9 (Ex: [8,9,9,9]), we need to increment the previous element to 9 by 1 (in this case increment 8 by 1) and turn all 9's to 0's
// 2. If the last element(index 0) is also 9, then we can make that 1 and appened a 0 to the end of the array as we are going to have one extra 0 at the end
// Ex: [9,9,9], make this [1,0,0] and the append 0 to it [1,0,0,0]
// 3. If we have an input like [0,0,9,9,9], in this case we have all 9's and last 9's index is not 0, then in this case check if there is a 0 before 9
// if there is a 0, then turn the 9 to 0 and 0 to 1. [0,1,0,0,0]
// 4. Finally at the end, iterate over the array again to check if there are any 0's at the beginning of the array and omit them as we just have to return the actual number withot 0s.

// **Note: You can run this code in any browser console.

var addOneToNumber = (A) => {
    let len = A.length;
    if (len === 0) return [];
    if (A[len - 1] < 9) {
        A[len - 1] = A[len - 1] + 1;
    } else {
        for (let i = len - 1; i >= 0; i--) {
            if (A[i] === 9) {
                if (i === 0) {
                    A[i] = 1;
                    A.push(0);
                    break;
                } else {
                    if (A[i - 1] === 0) {
                        A[i] = 0;
                        A[i - 1] = 1;
                        break;
                    } else {
                        A[i] = 0;
                    }
                }
            } else {
                A[i] = A[i] + 1;
                break;
            }
        }
    }

    for (let i = 0; i < len; i++) {
        if (A[i] === 0) {
            continue;
        } else {
            return A.slice(i);
        }
    }
}

console.log(addOneToNumber([6]));
console.log(addOneToNumber([9]));
console.log(addOneToNumber([0, 0, 1, 2, 3]));
console.log(addOneToNumber([0, 0, 0, 9, 9]));
console.log(addOneToNumber([9, 9, 9]));
console.log(addOneToNumber([0, 0, 5, 9, 9]));