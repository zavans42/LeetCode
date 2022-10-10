/*

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109  
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

// MY SOLUTION

// Runtime = 211 ms, Beats 20.73%
// Memory = 42.5 MB, Beats 59.65%

var twoSum = function (nums, target) {
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    // break if there's a value in indices array
    if (indices.length > 0) {
      break;
    }

    for (let y = 0; y < nums.length; y++) {
      // skip the same number  
      if (i === y) {
        continue;
      }

      // check if two number added up equal to target
      if (nums[i] + nums[y] === target) {
        indices.push(i, y);
        break;
      }
    }
  }

  return indices;
};


// OTHER SOLUTION

// Two-pass Hash Table (JS object)

var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices[complement] !== undefined && indices[complement] !== index) {
            return [index, indices[complement]]
        }
    }
};

// Using ES6 data structure Map. Time complexity is O(n).

var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};

// Using Object. Time complexity is O(n).

var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}