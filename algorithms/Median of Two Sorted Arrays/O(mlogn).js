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
 * 优秀答案
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
  var l1 = nums1.length, l2 = nums2.length, arr = new Int32Array(l1 + l2), i = 0;
  do {
    if (l1 && l2) {
      if (nums1[l1 - 1] > nums2[l2 - 1]) {
        arr[i] = nums1[l1 && --l1];
      } else {
        arr[i] = nums2[l2 && --l2];
      }
    } else {
      if (l1) {
        arr[i] = nums1[l1 && --l1];
      } else {
        arr[i] = nums2[l2 && --l2];
      }
    }
    i++;
  } while (l1 || l2)
  
  if (arr.length === 1) return arr[0];
  
  var m = Math.floor(arr.length / 2);
  return arr.length % 2 ? arr[m] : (arr[m] + arr[m - 1]) / 2;
};

/**
 * ES6 答案
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let num3 = [...nums1, ...nums2].sort((a, b) => a - b);
  return (num3.length % 2 ? num3[parseInt(num3.length/2)] : (num3[(num3.length/2)-1] + num3[num3.length/2]) / 2)
};

/**
 * ES5 答案
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a,b) => a === b ? 0 : a < b ? -1 : 1 );
  const len = arr.length;
  return len % 2 ? arr[~~(len / 2)] : (arr[len / 2 - 1] + arr[len / 2]) / 2;
};