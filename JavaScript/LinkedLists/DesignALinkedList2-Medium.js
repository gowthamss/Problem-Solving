// Given a matrix A of size Nx3 representing operations. Your task is to design the linked list based on these operations.

// There are four types of operations:

// 0 x -1: Add a node of value x before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.

// 1 x -1: Append a node of value x to the last element of the linked list.

// 2 x index: Add a node of value x before the indexth node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.

// 3 index -1: Delete the indexth node in the linked list, if the index is valid.

// A[i][0] represents the type of operation.

// A[i][1], A[i][2] represents the corresponding elements with respect to type of operation.

// Note: Indexing is 0 based.

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

var designLL2 = (A) => {
    let head = null,
        size = 0;

    for (let i = 0; i < A.length; i++) {
        let cVal = A[i];

        if (cVal[0] === 0) {
            let newNode = new Node(cVal[1]);

            if (!head) {
                head = newNode;
            } else {
                newNode.next = head;
                head = newNode;
            }
            size++;
        } else if (cVal[0] === 1) {
            let newNode = new Node(cVal[1]);

            if (!head) {
                head = newNode;
            } else {
                let temp = head;

                while (temp.next) {
                    temp = temp.next;
                }
                temp.next = newNode;
            }
            size++;
        } else if (cVal[0] === 2) {
            let newNode = new Node(cVal[1]);
            let index = cVal[2];

            if (index < size || index >= 0) {
                if (index === size) {
                    if (index === 0) {
                        head = newNode;
                    } else {
                        let temp = head;

                        while (temp.next) {
                            temp = temp.next;
                        }
                        temp.next = newNode;
                    }
                    size++;
                } else {
                    if (index === 0) {
                        newNode.next = head;
                        head = newNode;
                    } else {
                        let counter = 0;
                        let temp = head;

                        while (counter < index - 1) {
                            counter++;
                            temp = temp.next;
                        }
                        let nextNode = temp.next;
                        newNode.next = nextNode;
                        temp.next = newNode;
                    }
                    size++;
                }
            }
        } else if (cVal[0] === 3) {
            let index = cVal[1];

            if (index < size && index >= 0) {
                if (index === 0) {
                    head = head.next;
                } else {
                    let counter = 0;
                    let temp = head;
                    while (counter < index - 1) {
                        counter++;
                        temp = temp.next;
                    }
                    temp.next = temp.next.next;
                }
                size--;
            }
        }
    }

    return head;
}

console.log(designLL2([
    [1, 13, -1],
    [3, 0, -1],
    [3, 1, -1],
    [2, 15, 0],
    [3, 0, -1],
    [1, 12, -1],
    [3, 0, -1],
    [1, 19, -1],
    [1, 13, -1],
    [3, 0, -1],
    [0, 12, -1],
    [1, 13, -1],
    [3, 2, -1]
]));