---
title: 用setTimeout模拟setInterval
display: home
lang: zh
description: setTimeout模拟setInterval
image: https://picsum.photos/536/354?random&date=2022-01-19
date: 2022-01-19
vssue-title: vuepress-plugin-img-lazy
categories:
  - 面试题
---

为什么要用模拟呢？第一次听见面试官问我这个问题的时候，我都懵了！

<!-- more -->

### 为什么不用setInterval？

首先要明白定时器的时间，并不是多长时间执行，而是多长时间将其推入任务队列。  
然后setInterval和setTimeout不同的是，setTimeout在时间到了的时候会被直接推入队列然后等待执行，而setInterval会在推入前查看队列中有没有其他的定时器在执行或者等待，有的话就不能推入，会等待其完成后在推入，久而久之时间间隔会越来越大就显得不准确了。所以通常用setTimeout来模拟setInterval。

```js
function mockInterval(fn, time) {
    let timeId = null;
    function interval() {
        timeId = setTimeout(interval, time)
        fn()
    }

    timeId = setTimeout(interval, time)
    // 取消定时器
    mockInterval.cancel = () => {
        clearTimeout(timeId)
    }
}


```
