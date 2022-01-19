---
title: 【每日一题】最后一个单词的长度
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-19
date: 2022-01-19
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
categories:
  - 面试题
---

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

**单词** 是指仅由字母组成、不包含任何空格字符的最大子字符串。

<!-- more -->

### 示例 1：

>输入：s = "Hello World"  
>输出：5

### 示例 2：

>输入：s = "   fly me   to   the moon  "  
>输出：4

### 示例 3：

>输入：s = "luffy is still joyboy"  
>输出：6

### 思路

emmm~~用split将数组按空格分开？还是那句话，这不是开发。
+ 将字符串首尾去空
+ 初始化变量length，赋值为去空后字符串长度
+ 倒叙遍历
+ 找到第一个空格，求取最后一个单词长度

### 代码

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let length = s.length;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            return length = s.length - i - 1;
        }
    }
    return length;
};
```