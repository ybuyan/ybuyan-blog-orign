---
title: BFC布局
display: home
lang: zh
description: learning the CSS - BFC布局
image: https://picsum.photos/536/354?random&date=2019-09-21
date: 2019-09-21
vssue-title: vuepress-plugin-img-lazy
tags:
  - css
categories:
  - web前端
---

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

<!-- more -->

BFC作用：
1. BFC元素不与浮动元素相重叠（两栏布局）
2. 清除内部浮动 （撑开高度）
   1. 原理: 触发父div的BFC属性，使下面的子div都处在父div的同一个BFC区域之内
3. 分属于不同的BFC时，可以阻止margin重叠

如何生成BFC：（脱离文档流）
1. 根元素，即HTML元素（最大的一个BFC）
2. float的值不为none
3. position的值为absolute或fixed
4. overflow的值不为visible（默认值。内容不会被修剪，会呈现在元素框之外）
5. display的值为inline-block、table-cell、table-caption

BFC布局规则：
1. 内部的Box会在垂直方向，一个接一个地放置。
2. 属于同一个BFC的两个相邻的Box的margin会发生重叠
3. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此, 文字环绕效果，设置float
4. BFC的区域不会与float box重叠。
5. 计算BFC的高度，浮动元素也参与计算
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>BFC自适应两栏布局</title>
  <style>
    .left {
      width: 200px;
      height: 500px;
      float: left;
      background: #999;
    }
    .main {
      height: 800px;
      background: #aaa;
      overflow: auto;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="left"></div>
  <div class="main">
    <h1>BFC 两栏布局</h1>
    <p>
      左侧块浮动到左边，但是因为是浮动块，右侧块高度一旦超过左侧块后文字就会出现在左侧的下方，因为没有块把它挡住。
    </p>
    <p>解决办法： 让右侧块变为BFC文字就不会横过去。因为BFC元素不与Float元素相重叠。</p>
  </div>
</body>
</html>
```