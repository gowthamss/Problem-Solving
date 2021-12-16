// Problem statement
// Given a string A consisting only of '(' and ')'.

// You need to find whether parantheses in A is balanced or not ,if it is balanced then return 1 else return 0.

// Ex:
// A = "(()())" - output = 1
// A = "(()" - output = 0
// A = "))((()(())" - output = 0

// Note: This is data structure question. And this can be solved using stacks.

var balancedParanthesis = (A) => {
    // We know that a single character can't be a valid parantheses, so return 0
    if (A.length < 2) {
        return 0;
    }

    let stack = [];
    let size = 0;

    // Iterate over A
    for (let val of A) {
        // If current character is '(', then push that character to stack and increment the size
        if (val === '(') {
            stack.push(val);
            size++;
        } else {
            // If the current character is ')', then pop the last stored parantheses in the stack which is '('
            // and decrement the size
            if (stack.length) {
                stack.pop();
            }
            size--;
        }
    }

    // Finally, if both size and stack is empty, then return 1 else 0
    // We have to check both size and stack length because
    // for example given string is ')))', then at the end the stack size will be 0 and size will be -3. So we can't depend on stack size.
    return size === 0 && stack.length === 0 ? 1 : 0;
}


console.log(balancedParanthesis(")))"));
console.log(balancedParanthesis("))((()(())"));
console.log(balancedParanthesis("(()())"));
console.log(balancedParanthesis("(()"));