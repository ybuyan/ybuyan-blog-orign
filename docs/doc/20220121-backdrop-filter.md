---
title: 【毛玻璃效果】backdrop-filter
display: home
lang: zh
description: backdrop-filter
image: https://picsum.photos/536/354?random&date=2022-01-21
date: 2022-01-21
vssue-title: vuepress-plugin-img-lazy
tags:
  - CSS3
categories:
  - 面试题
---

跟着小破站学技术，先上小demo，[点击链接](https://codepen.io/yjonny/project/full/XEQrnm)

<!-- more -->

### 技术点

在这个项目中有主要的技术点:  

+ transform
+ backdrop-filter
  
因为前两天偶然看见一个面试题 - 如何做出毛玻璃效果？  
然后就认识到了一个新的css属性。  

### backdrop-filter

这里引出另外一个属性filter，对比一下发现一个是“前景滤镜”(filter), 一个是“后景滤镜”(backdrop-filter)。  

两个属性没有什么不同，几乎一模一样！  

### backdrop-filter语法
```css
/* 关键字值 */
backdrop-filter: none;

/* URL方式外链SVG filter */
backdrop-filter: url(zxx.svg#filter);

/* <filter-function>值 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%); 
```

### filter语法

```css
/* 关键字值 */
filter: none;

/* URL方式外链SVG filter */
filter: url(zxx.svg#filter);

/* <filter-function>值 */
filter: blur(2px);
filter: brightness(60%);
filter: contrast(40%);
filter: drop-shadow(4px 4px 10px blue);
filter: grayscale(30%);
filter: hue-rotate(120deg);
filter: invert(70%);
filter: opacity(20%);
filter: sepia(90%);
filter: saturate(80%);
```

### 滤镜含义

| 滤镜 | 含义 |
| ----- | ----- |
| blur | 模糊 |
| brightness | 亮度 |
| contrast | 对比度 |
| drop-shadow | 投影 |
| grayscale | 灰度 |
| hue-rotate | 色调变化 |
| invert | 反相 | 
| opacity | 透明度 | 
| saturate | 饱和度 |
| sepia | 褐色 |
  
具体的属性应用直接看张大大的这篇文章: [“FDCon2019大会分享之滤镜与混合模式实录”](https://www.zhangxinxu.com/wordpress/2019/06/fdcon2019-css-share/)


   