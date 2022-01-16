---
title: 【每日一题】合并两个有序链表
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-16
date: 2022-01-16
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 链表
categories:
  - 面试题
---

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

<!-- more -->
### 示例1

![merge_ex1](../../asstes/img/merge_ex1.jpg)

>输入：l1 = [1,2,4], l2 = [1,3,4]  
>输出：[1,1,2,3,4,4]

### 示例2

>输入：l1 = [], l2 = []  
>输出：[]

### 示例3

>入：l1 = [], l2 = [0]  
>输出：[0]

### 提示
+ 两个链表的节点数目范围是 [0, 50]
+ -100 <= Node.val <= 100
+ l1 和 l2 均按 非递减顺序 排列

### 链表？

链表（Linked List）是最简单的线性的、动态数据结构。理解它是理解树结构、图结构的基础。

区别于数组，链表中的元素不是存储在内存中连续的一片区域，链表中的数据存储在每一个称之为「结点」复合区域里，在每一个结点除了存储数据以外，还保存了到下一个节点的指针（Pointer）。

![lists2](../../asstes/img/lists2.png)

由于不必按顺序存储，链表在插入数据的时候可以达到 O(1)O(1) 的复杂度，但是查找一个节点或者访问特定编号的节点则需要 O(n)O(n) 的时间。

使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。

在计算机科学中，链表作为一种基础的数据结构可以用来生成其它类型的数据结构。链表通常由一连串节点组成，每个节点包含任意的实例数据（data fields）和一或两个用来指向上一个/或下一个节点的位置的链接（links）。链表最明显的好处就是，常规数组排列关联项目的方式可能不同于这些数据项目在记忆体或磁盘上顺序，数据的访问往往要在不同的排列顺序中转换。而链表是一种自我指示数据类型，因为它包含指向另一个相同类型的数据的指针（链接）。

链表允许插入和移除表上任意位置上的节点，但是不允许随机存取。链表有很多种不同的类型：单向链表，双向链表以及循环链表。

### 解题

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    if(list1.val < list2.val) {
        list1.next =  mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next =  mergeTwoLists(list1, list2.next)
        return list2;
    }
};
```