/*

14. Longest Common Prefix

A. DESCRIPTION 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

B. EXAMPLE

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.2

C. CONSTRAINTS

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.

*/

// MY SOLUTION

// Runtime = 117 ms, Beats 24.26%
// Memory = 44.5 MB, Beats 11.34%

var longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return strs[0];
  }

  let prefix = "";

  while (strs.every((s) => s[0] == strs[0][0])) {
    if (strs.every((s) => s == "")) {
      break;
    }
    prefix += strs[0][0];
    strs = strs.map((x) => x.slice(1));
  }

  return prefix;
};

// OTHER SOLUTION

// Using for loop
// First find the shortest string in the array

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = "";
  let maxPrefixLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < maxPrefixLength; i++) {
    const firstLetter = strs[0][0];
    if (!strs.every((str) => str[0] == firstLetter)) break;
    prefix += firstLetter;
    strs = strs.map((x) => x.slice(1));
  }

  return prefix;
};

// Using Array.sort()
var longestCommonPrefix = function (strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};
