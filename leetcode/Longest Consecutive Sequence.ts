// https://leetcode.com/problems/longest-consecutive-sequence/

// Input: nums = [100,4,200,1,3,2]
// Output: 4

//Brute force approach
//Time complexity O(n^2)
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  let longestSequence = 1;
  for (let i = 0; i < nums.length; i++) {
    let currentSequence = 1;
    let nextSequence = nums[i] + 1;
    while (nums.includes(nextSequence)) {
      currentSequence++;
      nextSequence++;
    }
    longestSequence = Math.max(longestSequence, currentSequence);
  }

  return longestSequence;
}

// Use set
//Time complexity 0(n)
//Space complexity 0(n)

function longestConsecutiveUsingSet(nums) {
  if (!nums.length) return 0;
  let numsSet = new Set(nums);
  let longestSequence = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let currentSequence = 1;
      while (numsSet.has(nums[i] + 1)) {
        currentSequence++;
        nums[i] = nums[i] + 1;
      }
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }
  return longestSequence;
}
