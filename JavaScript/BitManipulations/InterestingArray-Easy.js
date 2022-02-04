//// Problem Statement

// You have an array A with N elements. We have 2 types of operation available on this array :
// We can split a element B into 2 elements C and D such that B = C + D.
// We can merge 2 elements P and Q as one element R such that R = P^Q i.e XOR of P and Q.
// You have to determine whether it is possible to make array A containing only 1 element i.e. 0 after several splits and/or merge?

// Problem Constraints

// 1 <= N <= 100000
// 1 <= A[i] <= 106

// Input 1:
//  A = [9, 17]

// Input 2:
//  A = [1]

// Output 1:
//  Yes

// Output 2:
//  No

//// Solution - Using Observations - TC: O(N), SC: O(1)
// 1. a ^ a = 0, using this observation, all the even elements in the array will get turned to zeros, so we dont have to consider them.
// 2. Now we iterate through the array and increment the count for odd elements in the array
// 3. If the count is divided by 2, then we return 'yes', otherwise 'no', because adding two odd numbers result in a even number which can be turned to 0. Ex: 9+7=16

var interestingArray = (A) => {
    let len = A.length,
        count = 0;

    for (let i = 0; i < len; i++) {
        if (A[i] % 2 !== 0) {
            count++;
        }
    }

    if (count % 2 === 0) {
        return 'Yes';
    } else {
        return 'No';
    }
}

console.log(interestingArray([9, 17]));
console.log(interestingArray([1]));
console.log(interestingArray([9, 17, 24, 36, 8, 5]));