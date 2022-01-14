---
title: js执行期上下文
display: home
lang: zh
description: learning the js - 执行期上下文
image: https://picsum.photos/536/354?random&date=2019-09-26
date: 2019-09-26
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
categories:
  - web前端
---

抽象概念，简而言之js是在执行上下文中运行的。

<!-- more -->

## 类型 3种

### 全局执行上下文
这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。

### 函数执行上下文

每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序（将在后文讨论）执行一系列步骤。

### Eval 函数执行上下文

执行在 eval 函数内部的代码也会有它属于自己的执行上下文，但由于 JavaScript 开发者并不经常使用 eval，所以在这里我不会讨论它。

## 执行栈

是一种LIFO(后进先出)的数据结构， 用来储存执行上下文

当javascript引擎检测到脚本时，就会创建一个全局执行上下文并且将其压入到执行栈底部(最先被创建的)。当有函数被调用时会生成一个函数执行上下文，然后被压入执行栈的顶部。
执行引擎会先执行栈顶的函数执行上下文，当函数执行完毕会被弹出，然后执行下一个执行期上下文。

## 创建执行期上下文

在javascript代码执行前会创建执行上下文。创建会经历三件事

    1. this的绑定
    2. 词法环境组件创建
    3. 变量环境组件创建

所以会有：

``` js
    ExecutionContext = {
        ThisBinding = < this value > ,
        LexicalEnvironment = {
            ...
        },
        VariableEnvironment = {
            ...
        },
    }
```

### this绑定

被谁调用this就指向谁，如果没被调用就指向全局

``` js
    let foo = {
        baz: function() {
            console.log(this);
        }
    }

    foo.baz(); // 'this' 引用 'foo', 因为 'baz' 被对象 'foo' 调用

    let bar = foo.baz;
    bar(); // 'this' 指向全局 window 对象，因为没有指定引用对象
```

### 词法环境和变量环境

在 ES6 中，词法环境和变量环境的一个不同就是前者被用来存储函数声明和变量（let 和 const）绑定，而后者只用来存储 var 变量绑定。
在初始化的时候let 和 const 定义的变量并不会关联任何值，但 var 定义的变量被设成了 undefined。
这是因为在创建阶段时，引擎检查代码找出变量和函数声明，虽然函数声明完全存储在环境中，但是变量最初设置为 undefined（var 情况下），或者未初始化（let 和 const 情况下）。
这就是为什么你可以在声明之前访问 var 定义的变量（虽然是 undefined），但是在声明之前访问 let 和 const 的变量会得到一个引用错误。
