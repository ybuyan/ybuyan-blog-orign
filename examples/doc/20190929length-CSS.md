---
title: css中有这么么么多长度单位？
display: home
lang: zh
description: learning the CSS - css中有这么么么多长度单位？
image: https://picsum.photos/536/354?random&date=2019-09-29
date: 2019-09-29
vssue-title: vuepress-plugin-img-lazy
tags:
  - css
categories:
  - web前端
---

wtf？vmin是什么东西~？

<!-- more -->

emmm~下面都是瞎几把写的,我需要猛戳这个MDN链接
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units



###常见绝对单位
######px
在我的认识里面这是一个远古单位，绝对常量，个人比较喜欢用来设置字体大小等

###常见相对单位
重点是相对，你首先得需要一个参照物，比如父元素字体大小，窗口视图宽度等
######em
元素的font-size是相对于父元素父元素父元素的字体大小，然而他的其他元素使用的是自身的字体大小，所以一定得明白本身的字体大小是什么
######rem
这是我比较喜欢的单位，r代表的是root,rem类似于em，不同就在这个r上面， rem相对与根节点root的字体大小。
######vh/vw
这也是比较常用的单位
v---视图(view),vh视图高度，vw视图宽度，相对视图，就是相对与你能看到的高度宽度，如100vh--100%视图高度，50vh一半高度。有点特x的抽象。
#####vmin/vmax
个人认为这是vh/vw的衍生单位，指的是视图的最小和最大尺寸的**1%**。
比如视图高100px，宽50px，那么1vmin = 0.5px，1vmax = 1px

想要做自适应，我觉得还是得了解这些单位，好比虚竹有了北冥神功才会那么快就学会天山六阳掌、天山折梅手~~才会是天龙里面最溜的那个渣男，呸不对，反正掌门是天龙里面最厉害的！！！！！！！！！！！！！！！！！！！！！！！！！！
