---
title: 【每日一题】二进制求和
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-21
date: 2022-01-21
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
  - 双指针
categories:
  - 面试题
---

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 **非空** 字符串且只包含数字 1 和 0。

<!-- more -->

### 示例 1:

>输入: a = "11", b = "1"  
>输出: "100"

### 示例 2:

>输入: a = "1010", b = "1011"  
>输出: "10101"
 

### 提示：

+ 每个字符串仅由字符 '0' 或 '1' 组成。  
+ 1 <= a.length, b.length <= 10^4  
+ 字符串如果不是 "0" ，就都不含前导零。  

### 题解

一个高手的解题思路:  
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 准备一个空数组备用
    let res = [];
    // c = 0,表示不用进位，当c = 1时需要进一位
    let c = 0;
    // 初始化两个指针， 分别是a，b的最后一位
    let [i , j] = [a.length - 1, b.length - 1];
    // 遍历循环，c如果不等于0，则需要继续循环
    while (i >= 0 || j >= 0 || c) {
        // 接收当前值
        let aa = Number(a[i]) ? Number(a[i]) : 0;
        let bb = Number(b[j]) ? Number(b[j]) : 0;
        // 缓存当前相加的值
        let sum = aa + bb + c;
        if (sum === 2) {
            // 等于2， 代表需要进位了，当前值就为0，c赋值为1
            sum = 0;
            c = 1;
        } else if (sum === 3) {
            // 等于3， 代表需要进位了，当前值就为1，c赋值为1
            sum = 1;
            c = 1;
        } else {
            c = 0
        }
        // 将每一位缓存值放入数组
        res = [sum, ...res];
        i--;
        j--;
    }
    // 输出
    return res.join('');
};
```