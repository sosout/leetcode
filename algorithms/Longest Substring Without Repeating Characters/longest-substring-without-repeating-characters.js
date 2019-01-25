
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
 * 以 s = "pwwkew" 为例，执行过程如下：
 * i = 0 => left = 0, v = "p", map = {}=> left = 0, map = {p: 0} => return 1;
 * i = 1 => left = 0, v = "w", map = {p: 0} => letf = 0, map = {p: 0, w: 1} => return 2;
 * i = 2 => left = 0, v = "w", map = {p: 0, w: 1} => left = 2, map = {p: 0, w: 2} => return 2;
 * i = 3 => left = 2, v = "k", map = {p: 0, w: 2} => left = 2, map = {p: 0, w: 2, k: 3} => return 3;
 * i = 4 => left = 2, v = "e", map = {p: 0, w: 2, k: 3} => left = 2, map = {p: 0, w: 2, k: 3, e: 4} => return 3;
 * i = 5 => left = 2, v = "w", map = {p: 0, w: 2, k: 3, e: 4} => left = 3, map = {p: 0, w: 5, k: 3, e: 4} => return 3;
 * 
 * 复杂度为 O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 统计字符串中的所有字母及其最新索引
  const map = {};
  // 记录当前非重复子字符串的起始索引
  let left = 0;
  
  return s.split('').reduce((max, v, i) => {
    // 如果当前字母已经存在 map 中且值 大于或等于 当前字母的起始索引, 
    // 通过将子字符串的起始点 left 移动到当前字母之后的一个索引来更新子字符串
    left = map[v] >= left ? map[v] + 1 : left;

    // 需要将 map[v] 更新为新的索引值 i
    map[v] = i;
    // 记录非重复子字符串中的最大数目
    return Math.max(max, i - left + 1);
  }, 0);
};

// ============  测试start  =================

lengthOfLongestSubstring("abcabcbb"); // 3

lengthOfLongestSubstring("bbbbb"); // 1

lengthOfLongestSubstring("pwwkew"); // 3

lengthOfLongestSubstring("abaaac"); // 2

// ============  测试end  =================