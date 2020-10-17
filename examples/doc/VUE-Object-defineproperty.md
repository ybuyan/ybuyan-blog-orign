---
title: Object.defineproperty在vue中的作用
display: home
lang: en-US
description: learnning the js -  Object.defineproperty在vue中的作用
image: https://picsum.photos/536/354?random&date=2019-09-21
date: 2019-09-22
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
  - VUE
  - 源码
categories:
  - web前端
---

# 神一样的defineproperty

<!-- more -->

在学习vue源码之前我还真的不知道这是个啥玩意啊，了解后才知道js无敌啊。<br>
[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。<br>
``` js
// 语法
Object.defineProperty(obj, prop, descriptor)
/**
 * 此方法传入三个参数
 * obj 指定修改对象
 * prob 指定将要修改的对象的属性 也就是obj.prob，可以是新属性也可以是原有属性,利用descriptor中的value
 * descriptor 指定要为prob做出的修改操作
*/ 
// 添加属性值
let obj = {
    name: "hello"
}
Object.defineProperty(obj, "age", {
    value: 12
})

console.log(obj.age); // 12

// 修改属性值
Object.defineProperty(obj, "name", {
    value: "i did a change"
})
console.log(obj.name); // i did a change

```
在vue中此方法非常重要，可以说是vue的一个核心方法。当然目前为止我只了解到vue用了它的setter，getter方法做到数据的双向绑定，但是不能在descriptor中同时设置访问器(set and get)和writable和value, 否则会报错，详情查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)文档<br>

简单来说set是为属性赋值，get是读取属性的值

``` js
let obj = {
    name: 'hello',
}

defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {// 所谓的数据劫持
        get() {
            return val;
        },
        set(newVal) {
            if (val === newVal) {
                return ;
            }
            val = newVal;
            console.log(`${key}属性更新了: ${val}`);
        }
    })
}
```

