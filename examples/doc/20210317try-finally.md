---
title: try..finally
display: home
lang: zh
description: try..finally
image: https://picsum.photos/536/354?random&date=2021-03-17
date: 2021-03-17
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
categories:
  - web前端
---

try..catch大家已经耳熟能详了，但是你知道try可以和catch活着finally配对使用吗，并且有时候还能同时使用。
finally可以被当成是一个回调函数，它在try之后执行，如果有catch的话会在catch之后执行，并且最后一定会执行。

如果在finally之前try块里面有return语句会出现怎么样得情况呢？
```js
    function foo() {
        try {
            console.log(42);
        } finally {
            console.log('hello')
        }
        console.log('world')
    }

    console.log(foo())
    // hello
    // 42
```