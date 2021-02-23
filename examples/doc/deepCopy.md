---
title: 深拷贝
display: home
lang: en-US
description: learning the js
image: https://picsum.photos/536/354?random&date=2019-09-22
date: 2019-09-22
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
categories:
  - web前端
---


### 深浅拷贝

拷贝为什么要分深浅？

<!-- more -->

因为值区分为原始值和引用值。

> 原始值： 存储在栈中的简单数据段，即他们的值直接存储在变量访问的位置。

包括五种原始类型：undefined、null、boolean、number、string。

> 引用值：存储在堆中的对象，即存储在变量处的值是一个指针，指向存储对象的内存处。

包括：object、array、function等

浅拷贝的时候，对于引用值时只能拷贝对象的指针。

### 区分原始值和引用值

判断值类型的方法有typeof、instanceof、constructor和toString。这里推荐使用 typeof。

typeof 可以区分是原始值还是 object

``` js
var obj = {
    'name': 'Tom'
}
var arr = ['a', 'b', 'c']
var str = 'chenxinming'
var bool = true
var num = 1
var n = null
var fn = function(n) {
    console.log(n)
}

console.log(typeof obj) // object
console.log(typeof arr) // object
console.log(typeof str) // string
console.log(typeof bool) // boolean
console.log(typeof num) // number
console.log(typeof n) // object
console.log(typeof fn) // function
```

### 区分引用值是数组还是对象

方法有instanceof、constructor和toString。这里使用toString，另外两个无法跨父子域

instanceof 只可以用来判断数组和对象、函数，不能判断string、数字和boolean类型

``` js
var obj = {
    'name': 'Tom'
}
var arr = ['a', 'b', 'c']
var str = 'chenxinming'
var bool = true
var num = 1
var n = null
var fn = function(n) {
    console.log(n)
}

console.log(obj instanceof Object) // true
console.log(arr instanceof Array) // true
console.log(str instanceof String) // false
console.log(bool instanceof Boolean) // false
console.log(num instanceof Number) // false
console.log(n instanceof Object) // false
console.log(fn instanceof Function) // true
```

constructor支持检查Object、Array、String、Boolean、Number、Function

``` js
var obj = {
    'name': 'Tom'
}
var arr = ['a', 'b', 'c']
var str = 'chenxinming'
var bool = true
var num = 1
var n = null
var fn = function(n) {
    console.log(n)
}

console.log(obj.constructor == Object) // true
console.log(arr.constructor == Array) // true
console.log(str.constructor == String) // true
console.log(bool.constructor == Boolean) // true
console.log(num.constructor == Number) // true
console.log(fn.constructor == Function) // true
```

toString，这个方法功能比较全面

``` js
var obj = {
    'name': 'Tom'
}
var arr = ['a', 'b', 'c']
var str = 'chenxinming'
var bool = true
var num = 1
var n = null
var fn = function(n) {
    console.log(n)
}

console.log(Object.prototype.toString.call(obj)) // [object Object]
console.log(Object.prototype.toString.call(arr)) // [object Array]
console.log(Object.prototype.toString.call(str)) // [object String]
console.log(Object.prototype.toString.call(bool)) // [object Boolean]
console.log(Object.prototype.toString.call(num)) // [object Number]
console.log(Object.prototype.toString.call(n)) // [object Null]
console.log(Object.prototype.toString.call(fn)) // [object Function]
```

### 浅拷贝

``` js
function clone(target) {
    let clonetarget = {}
    for (var prop in target) {
        clonetarget[prop] = target[prop]
    }
    return clonetarget;
}
```

### 深拷贝

因为浅拷贝只能拷贝原始值，对于引用值，它只能拷贝内存指针，所以出现了深拷贝。

``` js
function deepclone(target, clonetarget) {
    let target = target || {}
    let toStr = Object.prototype.toString
    let arrStr = "[Object Array]"

    for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
            if (target[prop] !== null && typeof(target[prop]) === 'object') {
                if (toStr.call(target[prop]) === arrStr) {
                    clonetarget[prop] = []
                } else {
                    clonetarget[prop] = {}
                }
                deepclone(target[prop], clonetarget[prop])
            } else {
                clonetarget[prop] = target[prop]
            }
        }
    }

    return clonetarget;
}
```
