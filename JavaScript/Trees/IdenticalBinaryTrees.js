// Problem Statement
// Given two binary trees, check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Ex:
//   1       1
//  / \     / \      => 1
// 2   3   2   3

//     1       1
//    / \     / \    => 0
//   2   3   3   3

var identicalBinaryTrees = (A, B) => {
    // If both the nodes are null, they are identical but we should end call to current tree
    if (A === null && B === null) {
        return 1;
    }

    // If any one of them is null then we directly return 0
    if ((A === null && B !== null) || (A !== null && B === null)) {
        return 0;
    }

    // If they are not null but the data is different then return 0
    if (A.data !== B.data) {
        return 0;
    }

    // Else continue
    return this.isSameTree(A.left, B.left) && this.isSameTree(A.right, B.right);
}