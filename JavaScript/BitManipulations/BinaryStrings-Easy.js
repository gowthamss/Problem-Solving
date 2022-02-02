//// Problem Statement
// Given two binary strings, return their sum (also a binary string).
// Example:

// a = "100"

// b = "11"
// Return a + b = "111".


//// Solution - TC: O(A) or O(B), SC: O(1)
// There is only one solution for this problem which is adding every single character to a result string.

var binaryStrings = (A, B) => {
    let loopLen = A.length > B.length ? A.length : B.length;
    let carry = 0,
        ans = '';
    let diff = Math.abs(A.length - B.length);

    loopLen -= 1;
    let greaterElem;
    let lessElem;
    if (A.length > B.length) {
        greaterElem = A;
        lessElem = B;
    } else {
        lessElem = A;
        greaterElem = B;
    }
    while (loopLen >= 0) {
        let aval = greaterElem[loopLen];
        let bval = lessElem[loopLen - diff];
        if (loopLen <= diff - 1) {
            if (aval === '0') {
                if (carry === 0) {
                    ans += '0';
                } else {
                    ans += '1';
                    carry = 0;
                }
            } else {
                if (carry === 0) {
                    ans += '1';
                    carry - 0;
                } else {
                    ans += '0';
                    carry = 1;
                }
            }
        }
        if ((aval === '1' && bval === '0') || (aval === '0' && bval === '1')) {
            if (carry === 0) {
                ans += '1';
            } else {
                ans += '0';
                carry = 1;
            }
        } else if (aval === '0' && bval === '0') {
            if (carry === 0) {
                ans += '0';
            } else {
                ans += '1';
                carry = 0;
            }
        } else if (aval === '1' && bval === '1') {
            if (carry === 0) {
                ans += '0';
                carry = 1;
            } else {
                ans += '1';
                carry = 1;
            }
        }
        loopLen--;
    }

    if (carry === 1) {
        ans += '1';
    }

    let res = ans.split('');
    let i = 0,
        j = res.length - 1;
    while (i < j) {
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        i++;
        j--;
    }

    return res.join('');
}

console.log(binaryStrings("1010110111001101101000", "1000011011000000111100110"));
console.log(binaryStrings("1110000000010110111010100100111", "101001"));