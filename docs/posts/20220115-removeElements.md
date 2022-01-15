---
title: 【每日一题】移除元素
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-15
date: 2022-01-15
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 双指针
categories:
  - 面试题
---

给你一个数组 nums 和一个值 val，你需要 **原地** 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 **O(1)** 额外空间并 **原地** 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

<!-- more -->

### 示例 1：

>输入：nums = [3,2,2,3], val = 3  
>输出：2, nums = [2,2]  
>解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

### 示例 2：

>输入：nums = [0,1,2,2,3,0,4,2], val = 2  
>输出：5, nums = [0,1,4,0,3]  
>解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。  
 

### 提示：

>0 <= nums.length <= 100  
>0 <= nums[i] <= 50  
>0 <= val <= 100  

又见双指针，和昨天的删除数组中的重复项一样。  
```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0;
    let fast = 0;
    while(fast < nums.length) {
        if (nums[fast] === val) {
            // 找到相同项，将快慢指针的值对调，是目标值到最前面，然后将慢指针加一。
            // 也可以从后面遍历，这样可以避免数组翻转。
            [nums[slow],nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
    nums.reverse(); // 将数组翻转
    return nums.length-slow;
};
```

### 写在后面

#### 什么是双指针

>双指针，指的是在遍历对象的过程中，不是普通的使用单个指针进行访问，而是使用两个相同方向（快慢指针）或者相反方向（对撞指针）的指针进行扫描，从而达到相应的目的。  

#### 对撞指针

>对撞指针是指在数组中，将指向最左侧的索引定义为左指针(left)，最右侧的定义为右指针(right)，然后从两头向中间进行数组遍历。

<!-- 上面的解法我们使用了快慢指针，有了对撞指针的理解后，回想一下似乎对撞指针更为快速。  
首先我们将**left**指针初始化为**0**，left指针从左到右开始遍历。  
然后我们将**right**指针初始化为**length - 1**，当left的值与目标值相等，将left和right值对调，然后right指针左移一位。  
知道左右指针相等，return出**left**。  
思路大概这样，那我们实现一下试试：  
```js

``` -->


