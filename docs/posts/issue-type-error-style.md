---
title: "Uncaught TypeError: Cannot read property 'style' of null"
display: home
image: https://picsum.photos/1920/1080/?random&date=2017-01-22
date: 2019-01-22
tags: 
  - js
categories:
  - issue
--- 

## 错误代码
![image.png](https://upload-images.jianshu.io/upload_images/13585227-a0ddd1ef92cfd732.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 报错原因===> js在html页面没有加载完成时开始编译，因此获取不到dom节点，所以为空。
### 将js放在了页面最后面，然后执行成功
### 其实只需要让js延时执行即可
#### 延时执行方法：
##### 1、将js代码块放置于HTML代码下端，也就是底部，等页面加载完成以后在执行。
##### 2、js代码抽出来单独成立一个文件，然后内部引入的方式。只适用于外部文件
```
<script src="index.js" defer="defer"></script><!--下载js代码但是不执行-->
<!--或者-->
<script src="index.js" defer="async"></script><!--下载并执行js代码但是让html页面继续渲染-->
```

#框架用的很方便~~~都快忘了这些基础知识了。
