---
title: 【每日一题】删除有序数组的重复项
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-14
date: 2022-01-14
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 双指针
categories:
  - 面试题
---

给你一个有序数组 nums ，请你**原地**删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 **原地 修改输入数组** 并在使用 O(1) 额外空间的条件下完成。

<!-- more -->

### 示例 1：

>输入：nums = [1,1,2]  
>输出：2, nums = [1,2]  
>解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

### 示例 2：

>输入：nums = [0,0,1,1,1,2,2,3,3,4]  
>输出：5, nums = [0,1,2,3,4]  
>解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 

### 提示：

>0 <= nums.length <= 3 * 104  
>-104 <= nums[i] <= 104  
>nums 已按升序排列  

### 题解
利用双指针，在不创建临时数组的情况下，当快指针的值与慢指针不相等时，将慢指针+1，并且让快指针的值和慢指针交换

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let slow = 0;
    const len = nums.length
    for(let fast = 1; fast < len; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
   return slow+1
};
```