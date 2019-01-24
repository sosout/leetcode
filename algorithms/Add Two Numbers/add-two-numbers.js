
/**
 * 两数相加
 * 
 * 题目描述：
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * Source : https://leetcode.com/problems/add-two-numbers/
 */


/**
 * // 单链表的定义。
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 复杂度为 O(n)
 * 应用了浅拷贝，cur赋值的时候只是传递一个指针，即res的内存地址，
 * 对cur.next的操作相当于对res.next的操作。 
 * 在while的循环里，cur = cur.next的操作，也是采用了浅拷贝，在这个情况下，res的next的就会一直添加下去。 
 * !== 要比 != 快大约30ms 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(-1), // 定义一个新链表 res
    cur = res, // 一个temp的链表cur，用来当作res的指针
    carry = 0; // 一个进位标志carry
  while (l1 !== null || l2 !== null) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = ~~(sum / 10);
    cur.next = new ListNode((sum) % 10);
    cur = cur.next;
  }

  if (carry === 1) {
    cur.next = new ListNode(1);
  }

  return res.next;
};

// ============  测试start  =================

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function LList() {
  // head存储第一个节点的引用
  this.head = null;
  // 用length表示列表的数量
  this.length = 0;
  this.append = append;
}

function append(element) {
  var node = new ListNode(element), head = this.head, current;
  if(head === null) {
    this.head = node;
  } else {
    current = head;
    // 循环链表，直到找到最后一项
    while(current.next) {
      current = current.next;
    }
    // 找到最后一项将其 next 赋为 node，建立连接
    current.next = node;
  }
  // 更新链表长度
  length++;
}

var l1 = new LList();
l1.append(2);
l1.append(4);
l1.append(3);

var l2 = new LList();
l2.append(5);
l2.append(6);
l2.append(4);

addTwoNumbers(l1.head, l2.head);

// ============  测试end  =================