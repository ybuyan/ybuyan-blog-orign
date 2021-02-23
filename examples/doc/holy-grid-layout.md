---
title: 圣杯布局
display: home
lang: en-US
description: learning the CSS - 圣杯布局
image: https://picsum.photos/536/354?random&date=2019-09-24
date: 2019-09-24
vssue-title: vuepress-plugin-img-lazy
tags:
  - css
categories:
  - web前端
---

### 圣杯布局
要求：三列布局；中间宽度自适应，两边内容定宽。

好处：重要的内容放在文档流前面可以优先渲染

<!-- more -->

原理：利用相对定位、浮动、负边距布局，而不添加额外标签

实现方式：

main部分首先要放在container的最前部分。然后是left,right

1.将三者都 float:left , 再加上一个position:relative (因为相对定位后面会用到）

2.main部分 width:100%占满

3.此时main占满了，所以要把left拉到最左边，使用margin-left:-100%

4.这时left拉回来了，但会覆盖main内容的左端，要把main内容拉出来，所以在外围container加上 padding:0 220px 0 200px

5.main内容拉回来了，但left也跟着过来了，所以要还原，就对left使用相对定位 left:-200px  同理，right也要相对定位还原 right:-220px

6.到这里大概就自适应好了。如果想container高度保持一致可以给left main right都加上min-height:130px
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>实现三栏水平布局之圣杯布局</title>
    <style type="text/css">
      /* 圣杯布局关键代码 */
      .left, .main, .right {
        float: left;
        position: relative;
        min-height: 300px;
      }
      .main {
        width: 100%;
        background-color: #999;
      }
      .container {
        padding-left: 200px;
        padding-right: 300px;
      }
      .left {
        margin-left: -100%;
        left: -200px;
        width: 200px;
        background-color:thistle;
      }
      .right {
        margin-left: -300px;
        right: -300px;
        width: 300px;
        background-color: violet;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="main">main</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </body>
</html>

```