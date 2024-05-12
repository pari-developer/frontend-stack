// https://leetcode.com/problems/group-anagrams

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time complexity:
// O(n * k * log k)
// (K is the length of the longest string)

// Space complexity:
// O(n∗k)
// (K is the length of the longest string)

function groupAnagrams(strs) {
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    const val = strs[i].split('').sort().join('');
    if (!obj[val]) {
      obj[val] = [strs[i]];
    } else {
      obj[val].push(strs[i]);
    }
  }
  return Object.values(obj);
}
