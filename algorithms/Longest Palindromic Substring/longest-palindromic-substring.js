
/**
 * 最长回文子串
 * 
 * 题目描述：
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * Source : https://leetcode.com/problems/longest-palindromic-substring/
 */


/**
 * 以 nums = [2, 11, 15, 7], target = 9 为例, 执行过程如下：
 * i = 0 => nums[i] = 2, tmp = 7, a = {2: 0};
 * i = 1 => nums[i] = 11, tmp = -2, a = {2: 0, 11: 1};
 * i = 2 => nums[i] = 15, tmp = -6, a = {2: 0, 11: 1, 15: 2};
 * i = 3 => nums[i] = 7, tmp = 2 => [0, 3];
 * 
 * 复杂度为 O(n)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0,
    end = 0;
  for(let i = 0; i < s.length; i++) {
    let odd = palinLen(s, i, i);
    let even = palinLen(s, i, i + 1);
    let max = Math.max(odd, even);
    if(max > (end - start) + 1) {
      let halfDist = Math.floor(max / 2);
      start = max % 2 ? i-halfDist : i - (halfDist - 1);
      end = i + halfDist;
    }
  }
  return s.substring(start, end + 1);
};

const palinLen = (s, start, end) => {
  while(start >= 0 && end < s.length && s[start] === s[end]){
    start--; 
    end++;
  }
  return end - start - 1;
}

// ============  测试start  =================

longestPalindrome('babad');

longestPalindrome('cbbd');

// ============  测试end  =================