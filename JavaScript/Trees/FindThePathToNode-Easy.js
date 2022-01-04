// Problem Statement
// Given a Binary Tree A containing N nodes.

// You need to find the path from Root to a given node B.

// NOTE:

// No two nodes in the tree have same data values.
// You can assume that B is present in the tree A and a path always exists.

// Ex:
// Input 1:

//  A =
//            1
//          /   \
//         2     3
//        / \   / \
//       4   5 6   7

//  B = 5

// Output 1:

//  [1, 2, 5]

// Solution
var findPathToNode = (A, B) => {
    let res = [];
    search(A, res, B);
    return res.reverse();
};

var search = (A, res, B) => {
    if (A === null) {
        return false;
    }
    if (A.data === B) {
        res.push(A.data);
        return true;
    }
    if (search(A.left, res, B) || search(A.right, res, B)) {
        res.push(A.data);
        return true;
    }
}