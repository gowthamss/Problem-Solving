//// Problem Statement
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

var spiralBinaryTree = (A) => {
    if (A === null) return;

    let queue = [],
        isReverse = true;

    queue.push(A);

    while (queue.length) {
        const size = queue.length;

        if (isReverse) {
            // Print from right to left
            for (let i = 0; i < n; i++) {
                let currentNode = queue[size - 1];

                if (currentNode.right) queue.unshift(currentNode.right);
                if (currentNode.left) queue.unshift(currentNode.left);

                queue.pop();

                console.log(currentNode);
            }

            isReverse = !isReverse;
        } else {
            // Print from left to right
            for (let i = size; i > 0; i--) {
                let currentNode = queue[0];

                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);

                queue.shift();

                console.log(currentNode);
            }

            isReverse = !isReverse;
        }
    }
}