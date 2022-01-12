//// Problem Statement
// Given a sorted array A containing N integers both positive and negative.

// You need to create another array containing the squares of all the elements in A and return it in non-decreasing order.

// Try to this in O(N) time.

// Input 1:
//  A = [-6, -3, -1, 2, 4, 5]

// Input 2:
//  A = [-5, -4, -2, 0, 1]

// Output 1:
//  [1, 4, 9, 16, 25, 36]

// Output 2:
//  [0, 1, 4, 16, 25]


//// Solution - TC: O(N), SC: O(N) Using two-pointers
// 1. As the elements are in sorted order, the negative numbers can give more value than positive numbers after squaring them.
// 2. So we can have two pointers one at start and other at end of the array.
// 3. Now, start a loop and in each iteration take squares of A[i] and A[j] and compare each other.
// 4. If s1 is greater, store s1 at the last position in the result array and increment i.
// 5. If s2 is greater, store s2 at last positon of the array and decrement j. 
// 6. If both are same, you can store any one of them and increment i/j accordingly.
// 7. At the end, decrement the pointer used to store the squares from back.

// **Note: You can run this code in any browser console.


var sortArrayWithSquares = (A) => {
    let len = A.length - 1;
    let i = 0,
        j = len;
    let res = [];

    while (i <= j) {
        let s1 = Math.pow(A[i], 2);
        let s2 = Math.pow(A[j], 2);

        if (s1 > s2) {
            res[len] = s1;
            i++;
        } else if (s1 < s2) {
            res[len] = s2;
            j--;
        } else {
            res[len] = s1;
            i++;
        }
        len--;
    }
    return res;
}

console.log(sortArrayWithSquares([-6, -3, -1, 2, 4, 5]));
console.log(sortArrayWithSquares([-5, -4, -2, 0, 1]));