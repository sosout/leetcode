
/**
 * 无重复字符的最长子串
 * 
 * 题目描述：
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */


/**
 * 复杂度为 O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  var left = 0;
  
  return s.split('').reduce((max, v, i) => {
    console.log('============= start ==============');
    console.log(map);
    console.log("v=" + v + ";left=" + left + ";i=" + i + ";max=" + max);
    console.log('============= end ==============');
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};

// ============  测试start  =================

lengthOfLongestSubstring("abcabcbb"); // 3

lengthOfLongestSubstring("bbbbb"); // 1

lengthOfLongestSubstring("pwwkew"); // 3

lengthOfLongestSubstring("abaaac"); // 2

/**
 * nums = [2, 11, 15, 7], target = 9
 * i = 0 => nums[i] = 2, tmp = 7, a = {2: 0};
 * i = 1 => nums[i] = 11, tmp = -2, a = {2: 0, 11: 1};
 * i = 2 => nums[i] = 15, tmp = -6, a = {2: 0, 11: 1, 15: 2};
 * i = 3 => nums[i] = 7, tmp = 2 => [0, 3];
 */

// ============  测试end  =================