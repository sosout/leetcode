/**
 * 寻找两个有序数组的中位数
 * 
 * 中位数：
 * 在一组有序的数字中找到中间的那个数字。如果数字的个数是奇数则直接返回中间的那个数，
 * 如果数字的个数是偶数此时这组数据的中位数有两个，取中间两个数的平均值即可。
 * 
 * 题目描述：
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 则中位数是 2.0
 * 
 * 示例 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * Source : https://leetcode.com/problems/median-of-two-sorted-arrays/
 */

/**
 * 复杂度为 O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 合并数组，返回有序数组
  var s = merge(nums1, nums2);

  var len = s.length;

  // 根据数组长度求中位数
  if (len & 1) return s[~~(len / 2)];
  else return (s[len / 2 - 1] + s[len / 2]) / 2;
};

function merge(left, right) {
  var tmp = [];

  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }

  return tmp.concat(left, right);
}