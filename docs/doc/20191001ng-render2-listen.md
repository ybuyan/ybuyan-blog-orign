---
title: Angular Renderer2 -- listen
display: home
lang: zh
description: learning the Angular renderer2 - listen
image: https://picsum.photos/536/354?random&date=2019-10-01
date: 2020-10-01
vssue-title: vuepress-plugin-img-lazy
tags:
  - Angular
categories:
  - 前端
---

### 批量copy数据到web中

<!-- more -->

需求：可以从csv文件中copy多行或列数据，然后粘贴到web对应的表格中。
方法：使用js的paste事件和angular的render2 listen去绑定监听函数。
issue：当绑定了listen函数后，textarea原本的粘贴事件失效。
fixed：当选中需要粘贴的起始行时将paste函数监听或者当鼠标focus到textarea时取消函数的监听。

### 示例

``` ts
    import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core'; // 引入 renderer2

    @Component({
    selector: 'my-app',
    template: `
        <p #listen>
        Hover to see some magic!
        </p>
        {{count}}
    `,
    })
    export class AppComponent  {
    @ViewChild('listen')
        private elRef: ElementRef;
        removeListen: any; 

        constructor(private renderer: Renderer2) {
        }

        ngAfterViewInit() {
            // 监听事件
            this.removeListen = this.renderer.listen(this.elRef.nativeElement, 'paste', (event) => {
                let paste = (event.clipboardData || window.clipboardData).getData('text');
                // to do something
            });
        }

        ngOnDestroy() {
            this.removeListen() // 取消监听 renderer2 listen 的返回值就是一个取消函数，方便用户取消事件监听
        }
    }

```
