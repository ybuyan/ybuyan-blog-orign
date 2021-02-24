---
title: CSS垂直居中
display: home
lang: zh
description: learning the CSS - CSS垂直居中
image: https://picsum.photos/536/354?random&date=2019-10-02
date: 2019-10-02
vssue-title: vuepress-plugin-img-lazy
tags:
  - css
categories:
  - web前端
---

源自《css揭秘》
在CSS中对元素进行水平居中非常的简单：如果是一个行内元素，就对他的父元素应用'text-align:center',如果是一个块级元素，就对他自身使用'margin:auto',然而对一个元素进行垂直居中就不是那么简单了。

<!-- more -->

###以下有几种简单的方法：

####1、基于绝对定位
此处又区分为固定宽度和高度以及不固定宽度和高度的

当宽度与高度固定时
```
  <style>
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -9rem;
      margin-top: -5rem;
    }
  </style>
  <body>
    <div class="center">
        要求原生有固定的宽高。<br/>
        position: absolute;<br/>
        top和left 为 50%;<br/>
        margin上为高的一半<br/>
        margin左为宽的一半<br/>
    </div>

  </body>
```
也可以借助强大的calc()函数,这样还可以省掉两行声明：
```
  <style>
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      position: absolute;
      top: calc(50%-5rem);
      left: calc(50%-9rem);
    }
  </style>
  <body>
    <div class="center">
        要求原生有固定的宽高。<br/>
        position: absolute;<br/>
        top和left 为 50%;<br/>
        margin上为高的一半<br/>
        margin左为宽的一半<br/>
    </div>

  </body>
```
通常情况下，对于居中的元素的宽高尺寸都是根据内容来决定的，如果能找到一个属性的百分比值以元素自身的宽高作为解析基础，那么难题就可以解决了，translate()变形函数恰到好处的能做到这一点。
```
  <style>
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  <body>
    <div class="center">
        不要求原生有固定的宽高。<br/>
        position: absolute;<br/>
        top和left 为 50%;<br/>
        transform: translate(-50%, -50%);
    </div>

  </body>
```
####2、基于viewport
假设我们不想使用绝对定位，依然可以使用translate()函数将这个元素以其自身的宽高进行移动，但是确实left和top元素，我们应该怎么做到呢？可以使用margin属性的百分比来实现
```
   .center {
     width: 18em;
     padding: 1em 1.5em;
     margin: 50vh auto 0;
     transform: translateY(-50%);
  }
```
####3、基于flexbox
毫无疑问这是最佳的解决方法，因为Flexbox是专门针对这类需求所设计的。
我们只需要写两行声明即可：
- 先给这个待居中的元素的父元素设置display:flex
- 再给这个元素自身设置margin:auto,当我们使用flexbox时margin:auto不仅水平方向上将元素居中，垂直方向上也能做到居中。
```
  <style>
    .wrapper {
      width: 1000px;
      height: 600px;
      background: #999;

      display: flex;
    }
    .center {
      width: 18em;
      height: 10em;
      text-align: center;
      background-color: orange;
      color: #fff;

      margin: auto;
    }
  </style>
  <body>
    <div class="wrapper">
      <div class="center">
        使用flex居中<br/>
        父元素 display: flex; <br/>
        居中块： margin: auto;
      </div>
    </div>
  </body>
```
###小结
#### 被居中元素宽高固定

1. 绝对定位，top和left 为 50%， margin的left和top为自身宽高一半
```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -9rem;
  margin-top: -5rem;
}
```

2. 绝对定位，top和lefe为父元素一半剪自身一半
```css
.center {
  position: absolute;
  top: calc(50% - 5em);
  left: calc(50% - 9em);
}
```

#### 被居中元素宽高不定
3. 使用CSS3 的 `transform`将位置在中心点平移自身宽高一半
```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

4. 使用flex布局居中
```css
.wrapper {
  display: flex;
}
.center {
  margin: auto;
}
```

5. flex布局，父元素指定子元素居中。
```css
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

#### 在浏览器窗口中居中
基于视口的垂直居中。不要求原生有固定的宽高，但是这种居中是在整个页面窗口内居中，不是基于父元素
```css
.center{
  margin: 50vh auto;
  transform: translateY(-50%);
}
```
