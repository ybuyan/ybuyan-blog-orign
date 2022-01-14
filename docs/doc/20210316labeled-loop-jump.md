---
title: 带标签的跳转
display: home
lang: zh
description: 类似于goto的跳转，作用域break和continue
image: https://picsum.photos/536/354?random&date=2021-03-16
date: 2021-03-16
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
categories:
  - web前端
---

JavaScript中有一个不为人知的特殊语句，叫做"标签语句"。

```js
    label: statement
```
例如：
```js
    foo: bar()
```
这是一个符合JavaScript规则的语句，foo是bar()的标签(你不知道的JavaScript中卷 -- 上下文规则)，标签语句具体有什么用呢？

<!-- more -->

如果JavaScript中有goto语句，那么理论上我们可以使用goto foo跳转到foo处执行，但是goto是公认的最糟糕的编码方式，好在JavaScript不支持goto，但是在某些时候我们需要类似这样的跳转。

虽然没有goto，但是JavaScript支持使用标签跳转实现goto的部分功能。continue和break可以带一个标签，实现像goto一样的跳转。例如：
```js
    foo:for(var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (j === i) {
                    // 跳转到下一个循环(外层循环)，不同与goto
                    continue foo;
                }

                if ((j * i) % 2 === 1) {
                    // 跳转到下一个循环(内层循环)
                    continue;
                }
                console.log(i, j)
            }
        }
        // 1 0
        // 2 0
        // 2 1
        // 3 0
        // 3 2
```

带标签的循环跳转更大的用处在于，和break _ 一起使用从内层循环跳转到外层循环。例如：
```js
    foo: for(var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if ((i * j) >= 3) {
                    console.log("stopping", i, j)
                    break foo; // 跳出到外层循环
                }
                console.log(i, j)
            }
        }
        // 0 0
        // 0 1
        // 0 2
        // 0 3
        // 1 0
        // 1 1
        // 1 2
        // stopping 1 3
```


