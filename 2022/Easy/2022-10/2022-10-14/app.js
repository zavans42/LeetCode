/*

20. Valid Parentheses

A. DESCRIPTION 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

B. EXAMPLE

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

C. CONSTRAINTS

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

*/

// MY SOLUTION
// using regex

var isValid = function (s) {
  const re = /(?:\[\]|\(\)|\{\})/;

  while (re.test(s)) s = s.replace(re, "");

  return !s.length;
};

// OTHER SOLUTION
// using hasmap

var isValid = function (s) {
  if (s.length === 0) return true;
  if (s.length === 1) return false;
  if (s.length % 2 !== 0) return false;

  const dictionary = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const lastChar = stack[stack.length - 1];
    const delChar = dictionary[currChar];

    if (delChar) {
      if (delChar === lastChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(currChar);
    }
  }

  return !stack.length;
};
