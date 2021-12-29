// Problem Statement
// Given the root of a tree A with each node having a certain value,
// find the count of nodes which have more value than all its ancestor

// Ex:

//     4
//    / \
//   5   2
//      / \
//     3   6
// Output = 3

var countingTheNodes = (A) => {
    if (A == null) {
        return 0;
    }
    return 1 + checkAncestor(A, A.data);
}

var checkAncestor = (A, rootVal) => {
    if (A === null) {
        return 0;
    }
    if (A.data > rootVal) {
        rootVal = A.data;
        // If current node value is greater than its parent node value then increment count to 1
        return 1 + checkAncestor(A.left, rootVal) + checkAncestor(A.right, rootVal);
    } else {
        // Else keep checking
        return checkAncestor(A.left, rootVal) + checkAncestor(A.right, rootVal);
    }
}