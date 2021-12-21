// Problem Statement
// Given a binary search tree of integers. You are given a range B and C.

// Return the count of the number of nodes that lies in the given range.

// Ex: A = 
//         15
//       /    \
//      12     20
//     / \    /  \
//   10  14  16  27
//   /
//  8
// B = 12
// C = 20
// Output: 5

var BSTNodesInARange = (A, B, C) => {
    // If root is null return 0
    if (A === null) {
        return 0;
    }
    // If A.data is less than the first value in the range, then it will not be in the left subtree so traverse right subtree
    if (A.data < B) {
        return this.solve(A.right, B, C);
    }
    // If A.data is greater than the first value in the range, then it will not be in the right subtree so traverse left subtree
    if (A.data > C) {
        return this.solve(A.left, B, C);
    }
    // Else it is equal to the current node value, so add 1 and traverse through both left and right
    return 1 + this.solve(A.left, B, C) + this.solve(A.right, B, C);
}