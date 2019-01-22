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
 * 复杂度为 O(logn)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var total = m + n;
  var half = total >> 1;

  if (total & 1)
    return findKth(nums1, m, nums2, n, half + 1);
  else 
    return (findKth(nums1, m, nums2, n, half) + findKth(nums1, m, nums2, n, half + 1)) / 2;
};


function findKth(a, m, b, n, k) { 
  // always assume that m is equal or smaller than n  
  if (m > n)  
    return findKth(b, n, a, m, k);  
  if (m === 0)  
    return b[k - 1];  
  if (k === 1)  
    return Math.min(a[0], b[0]); 

  // divide k into two parts  
  var pa = Math.min(k >> 1, m)
    , pb = k - pa;  

  if (a[pa - 1] < b[pb - 1])  
    return findKth(a.slice(pa), m - pa, b, n, k - pa);  
  else if (a[pa - 1] > b[pb - 1])  
    return findKth(a, m, b.slice(pb), n - pb, k - pb);  
  else 
    return a[pa - 1];  
}