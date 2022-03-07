//// Problem Statement
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */



var levelOrder = function(root) {
    if (root === null) return [];

    let q = [];
    let ans = [];

    q.push(root);

    while (q.length) {
        const size = q.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            const current = q[0];

            if (current.left) {
                q.push(current.left);
            }

            if (current.right) {
                q.push(current.right);
            }

            level.push(current.val);
            q.shift();
        }
        ans.push(level)
    }

    return ans;
};