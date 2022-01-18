---
title: 【每日一题】最大子数组和
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-18
date: 2022-01-18
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 贪心算法
categories:
  - 面试题
---

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**子数组** 是数组中的一个连续部分。

<!-- more -->

### 示例 1：

>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]  
>输出：6  
>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

### 示例 2：

>输入：nums = [1]  
>输出：1

### 示例 3：

>输入：nums = [5,4,-1,7,8]  
>输出：23

### 题解

这里官方给出的是动态规划，但是我还是不太理解动态规划到底如何实现的。暂且记着， 以后补上。  
这里姑且使用贪心算法实现。  
+ 首先，定义返回值result，并且赋初始值最小负整数， 避免整个数组都是负数。
+ 然后定义一个中间变量count，这个变量将于result作比较，决定要不要改变result的值
+ 最后一步，当count的值小于0时，将count的值回到0的初始值，相当于重新定位初始指标

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = -Infinity;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > result) {
            result = count;
        }
        if(count < 0) count = 0
    }
    return result;
};
```