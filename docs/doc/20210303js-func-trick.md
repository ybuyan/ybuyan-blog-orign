---
title: js有用的代码片段和trick
display: home
lang: zh
description: 一些代码片段
image: https://picsum.photos/536/354?random&date=2021-03-03
date: 2021-03-03
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
categories:
  - 前端
---

短小而实用的JS代码片段

<!-- more -->

## 浮点数取整
```js
  const x = 123.4545
  Math.floor(x); // 123

  // 以下方法只适用于32位以下整数
  x >> 0; // 123
  ~~x; // 123
  x | 0; // 123

  // 关于负数
  Math.floor(-12.53); // -13
  -12.53 | 0; // -12
```

## 六位数字验证码
```js
  ('000000' + Math.floor(Math.random() * 999999)).slice(-6)
```

## 16进制颜色代码生成
```js
  '#' + ('000000' + (Math.random() * 0x1000000<<0)).toString(16).slice(-6)
```

## 驼峰命名转下划线
```js
  'componentMapModelRegistry'.match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g).join('_').toLowerCase();
```