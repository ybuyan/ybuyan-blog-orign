---
title: ES6语法--let和const
display: home
lang: en-US
description: learning the js - ES6语法--let和const
image: https://picsum.photos/536/354?random&date=2019-09-23
date: 2019-09-23
vssue-title: vuepress-plugin-img-lazy
tags:
  - js
  - vue
  - ES6
categories:
  - web前端
---


作用：用来声明变量和常量 const声明的变量必须赋值

<!-- more -->

1、作用域只局限于当前代码块
```
         {
            var str = '333';
            console.log(str); //输出333

            let str1 = '444';
            console.log(str1);//输出444
        }
        console.log(str); //输出333
        console.log(str1);//报错 
```
2、使用let和const声明的变量作用域不提升
```
         {
            console.log(str);//undefined
            console.log(str1);//报错
            var str = '333';
            let str1 ='444';
        } 
```
3、在相同作用域内不能声明相同变量
```
        {
            var str = '33';
            var str = '44';
            console.log(str); //44

            let str1 = '33';
            let str1 = '44';
            console.log(str1); //报错
        } 
```
4、for循环体现let父子作用域 比如有五个按钮button，现实现点击每一个打印出对应的索引值
```
var button = document.querySelectorAll('button');
        for(var i = 0; i < button.length; i++){
            button[i].onclick = function(){
                console.log(i);//都是5
            }
        }
        //解决办法两种其一是闭包，其二是使用let
        var button = document.querySelectorAll('button');
        for(var i = 0; i < button.length; i++){
            (function(i){
                button[i].onclick = function(){
                console.log(i);//都是5
                }
            })(i);//输出对应索引
        }
        let button = document.querySelectorAll('button');
        for(let i = 0; i < button.length; i++){
            button[i].onclick = function(){
                console.log(i);//输出对应索引
            }
        }
```