---
title: 【每日一题】删除排序链表中的重复元素
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-25
date: 2022-01-25
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 双指针
categories:
  - 面试题
---

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

<!-- more -->

### 示例1

>输入：head = [1,1,2]  
>输出：[1,2]

### 示例2

>输入：head = [1,1,2,3,3]  
>输出：[1,2,3]

### 题解

看到这个题目的第一想法就是，这个和数组去重不是一个AC样嘛！  
事实上也是，和另外一道数组去重的解法一样，使用快慢双指针遍历求解：  

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
        return null
    }

    let slow = head;
    let fast = head;

    while (fast !== null) {
        // 当快慢指针的val不相等时
        if (fast.val !== slow.val) {
            // 移动慢指针
            slow = slow.next;
            // 快指针的val赋值给当前慢指针的val
            slow.val = fast.val;
        }
        // 快指针加一
        fast = fast.next;
    }
    // 最后清除慢指针的指向，就像是截断尾巴
    slow.next = null;
    return head;
};
```