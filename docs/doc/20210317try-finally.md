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
    
    // 42
    // hello
    // world
```

如果在finally之前try块里面有return语句会出现怎么样得情况呢？例如：
```js
    function foo() {
        try {
            return 42;
        } finally {
            console.log('hello')
        }
        console.log('world')
    }

    console.log(foo())
    // hello
    // 42
```
如结果所示，这里会先执行finally里面得代码，然后在执行try里面的代码。其实不是这样的，这里return 42先执行，将foo()的结果设置为42，然后执行try块执行完毕，接着执行finally，最后函数执行完毕显示console.log(...)显示值。

同样的，try中throw效果一样。但是finally中设置了throw就会不一样了。
```js
    function foo() {
        try {
            return 42;
        } finally {
            throw "oops!"
        }
        console.lof("never run")
    }
    console.log(foo())

    // Uncaught oops!
```

那么continue和break呢？
```js
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
    // 0 1 2 3 4 5 6 7 8 9

    for (var i = 0; i < 10; i++) {
        try {
            continue;
        } finally {
            console.log(i)
        }
    }
    // 0 1 2 3 4 5 6 7 8 9
```

finally中的return会覆盖try中的return。例如：
```js
    function foo() {
        try {
            return 42
        } finally {
            return "hello"
        }
    }
    console.log(foo())
    // hello
```