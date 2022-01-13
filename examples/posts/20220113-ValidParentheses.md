---
title: 【每日一题】有效括号
display: home
lang: zh
description: 面试题
image: https://picsum.photos/536/354?random&date=2022-01-13
date: 2022-01-13
vssue-title: vuepress-plugin-img-lazy
tags:
  - leetcode
categories:
  - 面试题
---

在开始之前，请允许我好好的骂骂自己，你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb你是sb！

<!-- more -->

### 题目描述

>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
>
>有效字符串需满足：
>
>左括号必须用相同类型的右括号闭合。
>左括号必须以正确的顺序闭合。  
>示例 1：  
>  
>输入：s = "()"  
>输出：true  
>示例 2：  
>  
>输入：s = "()[]{}"
>输出：true  
>
>示例 3：
>输入：s = "(]"  
>输出：false  
>  
>示例 4：  
>输入：s = "([)]"  
>输出：false  
>  
>示例 5：  
>输入：s = "{[]}"  
>输出：true  
>  
>提示:  
>1 <= s.length <= 104  
>s 仅由括号 '()[]{}' 组成  

这是最近遇到的一道面试题，可惜由于紧张没有任何思路，只记得这道题我在leetcode上面刷到过。  
面试完以后赶紧打开了leetcode，果然，这题我当时还做对了的，时间在一年前，真的太蠢了。  
下面是我当时的答案：  

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) 
        return false;
    while (s.length > 0) {
        let temp = s;// 每次遍历保留一个字符串的副本，用来判断是否还有有效括号残留
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s === temp) {
            return false;
        }
    }
    if (s === '') return true;
};
```
>一个很蠢又很简单的解法，通过有效括号成对出现的原理，循环不断的将有效的括号去除，直到字符串为空或者剩下的字符串不能再找到有效括号为止。

第二种解法是今天看完题解以后的解法，利用栈的原理。  
```js

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) 
        return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const temp = s[i];
        if (temp === '(' || temp === '{' || temp === '[') {
            stack.push(temp)
        } else {
            if (
                (temp === ')' && stack[stack.length-1] === '(')
                || (temp === '}' && stack[stack.length-1] === '{')
                || (temp === ']' && stack[stack.length-1] === '[')
            ) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    if (!!stack.length) { 
        return false;
    } else {
        return true;
    }
};

```
个人觉得效果都差不多~~~