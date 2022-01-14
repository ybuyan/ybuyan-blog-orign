---
title: moment和moment-timezone -- Angular
display: home
lang: zh
description: 时间对象工具库
image: https://picsum.photos/536/354?random&date=2021-07-22
date: 2021-07-22
vssue-title: vuepress-plugin-img-lazy
tags:
  - js 
  - 工具库
  - Date
categories:
  - web前端
---

偶然间被同事问道如何获取浏览器时间的时区缩写。查阅资料发现原生的js Date对象并没有提供这样的接口，但是万能的开源时代，[moment](https://momentjs.com/)和[moment-timezone](https://momentjs.com/timezone/)

<!-- more -->

### 引入
1.引入moment
> npm install moment --save     
> yarn add moment               
> Install-Package Moment.js     
> spm install moment --save     
> meteor add momentjs:moment   
> bower install moment --save   

2.引入moment-timezone
> bower install moment-timezone --save  
> npm install moment-timezone --save      
> yarn add moment-timezone             

3.在项目中使用