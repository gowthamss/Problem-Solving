// Problem Description

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// NOTE:

// All the operations have to be constant time operations.
// getMin() should return -1 if the stack is empty.
// pop() should return nothing if the stack is empty.
// top() should return -1 if the stack is empty.

// Ex:
// Input 1
// push(1)
// push(2)
// push(-2)
// getMin()
// pop()
// getMin()
// top()

// Output 1
// -2 1 2


// Input 2
// getMin()
// pop()
// top()

// Output 2
// -1 -1

// Inorder to return the minimum element, we maintain another stack to have minimum values to reduce TC to O(1)
// otherwise finding minimum takes O(n)

function MinStack() {
    // Initialize necessary variables
    this.stack = [];
    this.minStack = [];
}

MinStack.prototype.push = function(e) {
    let stackLen = this.stack.length;
    let minStackLen = this.minStack.length;

    // When both the stacks are empty, then the first element itself is the min. So push to minStack
    if (!stackLen) {
        this.minStack.push(e);
    } else {
        // Else check current value(which is e) if it is less than or equal to current min value in minStack
        let minTop = this.minStack[minStackLen - 1];
        if (e <= minTop) {
            // If yes, push the new value to minStack
            this.minStack.push(e);
        }
    }
    // Always push the passed value to the stack
    this.stack.push(e);
};
MinStack.prototype.pop = function() {
    // If and only if the stack has values
    if (this.stack.length) {
        let stackPopped = this.stack.pop();
        let minTop = this.minStack[this.minStack.length - 1];

        // Check if the popped element is also same as the top element in minStack
        // If yes remove that from minStack too
        if (stackPopped === minTop) {
            this.minStack.pop();
        }
    }
};
MinStack.prototype.top = function() {
    // If the stack is empty return -1, else return top
    return this.stack.length ? this.stack[this.stack.length - 1] : -1;
};
MinStack.prototype.getMin = function() {
    // If the minStack is empty return -1, else return top  which is minimum
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : -1;
};


// Create instance
var minimumStack = new MinStack();
console.log(minimumStack.push(1));
console.log(minimumStack.push(2));
console.log(minimumStack.push(-2));
console.log(minimumStack.getMin());
console.log(minimumStack.pop());
console.log(minimumStack.getMin());
console.log(minimumStack.top());