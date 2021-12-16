// Problem statement
// Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

// Refer to the examples for more clarity.

// Ex:
// A = {([])} - output - 1
// A = (){ - output - 0
// A = ()[] - output - 1


// Note: This is a data structure centric problem and can be solved using stacks.

var balancedParathesis2 = (A) => {
    // Create an object with all the given symbols for easy comparision
    let parans = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let stack = [];
    // Itereate over given string
    for (let i = 0; i < A.length; i++) {
        // If the current element is an opening brace, then push it to stack
        if (parans[A[i]]) {
            stack.push(A[i]);
        } else {
            // If it is a closing brace, then pop the last element from the stack
            // and compare the value stored for that popped element with the A[i]
            let lastStackElem = stack.pop();
            let currentElem = parans[lastStackElem];

            // If they do not match then it is not balanced paranthesis
            if (currentElem !== A[i]) {
                return 0;
            }
        }
    }
    // If the current element matches with its opening brace, at the end check if stack has some elements in it
    // that means for those elements there is no pair match.
    return stack.length > 0 ? 0 : 1;
}

console.log(balancedParathesis2("{[()]}"));
console.log(balancedParathesis2("(){"));
console.log(balancedParathesis2("()[]"));