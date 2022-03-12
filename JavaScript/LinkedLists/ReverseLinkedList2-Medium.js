//// Problem Statement

// Reverse a linked list A from position B to C.

// NOTE: Do it in-place and in one-pass.



// Problem Constraints

// 1 <= |A| <= 106

// 1 <= B <= C <= |A|



// Input Format

// The first argument contains a pointer to the head of the given linked list, A.

// The second arugment contains an integer, B.

// The third argument contains an integer C.



// Output Format

// Return a pointer to the head of the modified linked list.



// Example Input

// Input 1:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 2
//  C = 4

// Input 2:

//  A = 1 -> 2 -> 3 -> 4 -> 5
//  B = 1
//  C = 5


// Example Output

// Output 1:

//  1 -> 4 -> 3 -> 2 -> 5
// Output 2:

//  5 -> 4 -> 3 -> 2 -> 1


// Example Explanation

// Explanation 1:

//  In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5 
//  Thus, the output is 1 -> 4 -> 3 -> 2 -> 5 
// Explanation 2:

//  In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5  
//  Thus, the output is 5 -> 4 -> 3 -> 2 -> 1 


//// Solution

var reverseLinkedList2 = (A, B, C) => {
    // Count number of nodes
    let count = 0;
    let temp = A;
    while (temp !== null) {
        count++;
        // console.log(`count: ${count}`)
        // console.log(`temp: ${temp.data}`)
        temp = temp.next;
    }
    if (B === 1 && C === count) {
        let h2 = null;
        let nextNode = A;

        while (nextNode !== null) {
            let firstNode = nextNode;
            nextNode = nextNode.next;
            firstNode.next = h2;
            h2 = firstNode;
        }
        return h2;
    } else if (B === 1 && C < count) {
        let k = C;
        let h2 = null;
        let firstNode = A;
        let nextNode = A;

        while (k > 0) {
            let temp = nextNode;
            nextNode = nextNode.next;
            temp.next = h2;
            h2 = temp;
            k--;
        }
        firstNode.next = nextNode;
        return h2;
    } else if (B > 1 && C === count) {
        let k = B - 1;
        let temp = A;
        let h2 = null;
        while (--k) {
            // console.log(`k: ${k}`)
            temp = temp.next;
        }

        let nextNode = temp.next;
        // console.log(`next node: ${nextNode}`);
        // console.log(`temp: ${temp}`)
        while (nextNode !== null) {
            let removedNode = nextNode;
            nextNode = nextNode.next;
            removedNode.next = h2;
            h2 = removedNode;
        }
        temp.next = h2;
        return A;
    } else if (B > 1 && C < count) {
        let h2 = null,
            h3 = null;
        let temp = A;
        let k = B - 1;

        while (--k) {
            temp = temp.next;
        }
        let diff = C - B;
        let nextNode = temp.next;

        while (diff >= 0) {
            let removedNode = nextNode;
            nextNode = nextNode.next;
            removedNode.next = h2;
            h2 = removedNode;
            if (diff === C - B) {
                h3 = h2;
            }
            diff--;
        }
        temp.next = h2;
        h3.next = nextNode;
        return A;
    }
}