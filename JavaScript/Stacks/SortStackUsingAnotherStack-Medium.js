//// Problem Statement

// Given a stack of integers A, sort it using another stack.

// Return the array of integers after sorting the stack using another stack.



// Problem Constraints
// 1 <= |A| <= 5000

// 0 <= A[i] <= 109



// Input Format
// The only argument is a stack given as an integer array A.



// Output Format
// Return the array of integers after sorting the stack using another stack.



// Example Input
// Input 1:

//  A = [5, 4, 3, 2, 1]
// Input 2:

//  A = [5, 17, 100, 11]


// Example Output
// Output 1:

//  [1, 2, 3, 4, 5]
// Output 2:

//  [5, 11, 17, 100]

//// Solution - Using stacks and insertion sort - TC: O(N^2), SC: O(N)

// 1. Push to stack1 if the element is less than or equal to stack1 top.
// 2. Else pop all the elements that are less than A[i] and push them to stack2.
// 3. Now, push A[i] to stack1 and pop all elements from stack2 to stack1.

var sortStackUsingAnotherStack = (A) => {
    const stack1 = [];
    const stack2 = [];
    const len = A.length;

    stack1.push(A[0]);
    for (let i = 1; i < len; i++) {
        let stackTop = stack1[stack1.length - 1];
        // push small elements less than the top of stack1
        if (A[i] <= stackTop) stack1.push(A[i]);
        else {
            // else pop elements from stack1 which are less than A[i]
            while (A[i] > stackTop) {
                stack2.push(stack1.pop());
                stackTop = stack1[stack1.length - 1];
            }
            // push A[i] to stack1
            stack1.push(A[i]);

            // pop all elements from stack2 and push them back to stack1
            while (stack2.length) {
                stack1.push(stack2.pop());
            }
        }
    }

    // pop elements from stack1 and store them in array to form ascending order
    const res = [];
    while (stack1.length) {
        res.push(stack1.pop());
    }
    return res;
}

console.log(sortStackUsingAnotherStack([5, 17, 100, 11]));