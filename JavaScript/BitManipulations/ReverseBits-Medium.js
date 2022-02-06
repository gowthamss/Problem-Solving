//// Problem Statement
// Reverse the bits of an 32 bit unsigned integer A.

// Problem Constraints
// 0 <= A <= 2^32

// Input 1:
//  0

// Input 2:
//  3

// Output 1:
//  0

// Output 2:
//  3221225472

// Explanation 1:
//         00000000000000000000000000000000    
// =>      00000000000000000000000000000000

// Explanation 2:
//         00000000000000000000000000000011    
// =>      11000000000000000000000000000000


//// Solution - Simple observation - TC: O(logMax), SC: O(1)
// 1. The observation is that we can use reverse of a string approach here, but instead of actual values we need to reverse bits here
// 2. We can have two pointers one starting from 0(i) and other starting from 31(j)
// 3. We check if both the bits at 'i'th position and 'j'th position.
// 4. If they both are 0 or 1, then we don't need to swap bits, they can at their places
// 5. Otherwise, the other two cases we have is 0 & 1 and 1 & 0.
// 6. For these these two cases, we can perform bitwise operations to change 0 to 1 and 1 to 0, as it is done in the if else statement in the code

// Note**: You can run this in browser console.

var reverseBits = (A) => {
    let i = BigInt(0),
        j = BigInt(31);
    A = BigInt(A);
    let one = BigInt(1);
    let zero = BigInt(0);

    while (i < j) {
        let leftShiftI = (one << i);
        let leftShiftJ = (one << j);
        let ibit = A & leftShiftI;
        let jbit = A & leftShiftJ;

        // Case: ibit = 0, jbit = 1
        if (ibit === zero && jbit > zero) {
            A = A | leftShiftI;
            A = A ^ leftShiftJ;
        }
        // Case: ibit = 1, jbit = 0 
        else if (ibit > zero && jbit === zero) {
            A = A ^ leftShiftI;
            A = A | leftShiftJ;
        }
        i++;
        j--;
    }

    return Number(A);
}


console.log(reverseBits(3));
console.log(reverseBits(10));