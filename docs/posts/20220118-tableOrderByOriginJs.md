---
title: 原生js实现点击table的header进行排序
display: home
lang: zh
description: table排序
image: https://picsum.photos/536/354?random&date=2022-01-18
date: 2022-01-18
vssue-title: vuepress-plugin-img-lazy
tags:
  - js基础
categories:
  - 面试题
---

一道面试题，说的是给一个表格，表格有两列，一列是时间，点击时间的header，进行表格排序，使用原生的js。

<!-- more -->

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<script>
    let flag = false;

    function manOrder(tbody) {
        // console.log(tbody);
        let rows = tbody.children;
        rows = Array.prototype.slice.call(rows, 0)
        // console.log(rows);

        rows.sort((row1, row2) => {
            let cellVal1 = row1.getElementsByTagName('td')[0]?.innerText.replace(/(年|月)/g, '-').replace('日', '');
            let cellVal2 = row2.getElementsByTagName('td')[0]?.innerText.replace(/(年|月)/g, '-').replace('日', '');
            if (new Date(cellVal1).getTime() < new Date(cellVal2).getTime()) {
                return -1
            } else if (new Date(cellVal1).getTime() > new Date(cellVal2).getTime()) {
                return 1
            } else {
                return 0
            }
        })

        if (flag) {
            rows.reverse()
        }

        for (let i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i])
        }

        flag = !flag
    }
</script>

<body>
    <table id="c">
        <thead>
            <tr>
                <th onclick="manOrder(document.getElementById('tbody'))" class="date">日期</th>
                <th class="total">总次数</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr>
                <td>2017年10月23日</td>
                <td>68,112</td>
            </tr>
            <tr>
                <td>2017年8月6日</td>
                <td>68,020</td>
            </tr>
            <tr>
                <td>2017年11月11日</td>
                <td>69,433</td>
            </tr>
            <tr>
                <td>2016年5月12日</td>
                <td>69,699</td>
            </tr>
            <tr>
                <td>2017年1月18日</td>
                <td>42,565</td>
            </tr>
        </tbody>
    </table>
</body>

</html>
```