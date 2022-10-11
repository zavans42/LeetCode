/*

9. Palindrome Number

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/

// MY SOLUTION


// Runtime = 215 ms, Beats 83.49%
// Memory = 51.3 MB, Beats 36.51%

var isPalindrome = function(x) {
    return x == ~~([...x+''].reverse().join(''))
};


// REFINED SOLUTION
// without converting the integer to a string

var isPalindrome = x => {
    // check if negative
    if(x<0){return false}

    // get every last integer
    let reverse = 0;
    for(let i = x; x >= 1; i = Math.floor(i/10)){
        reverse = reverse*10 + i%10
    }

    // compare it with the original integer
    return rev === x
}   