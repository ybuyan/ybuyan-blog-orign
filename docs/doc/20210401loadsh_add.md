---
title: loadsh源码 -- add
display: home
lang: zh
description: loadsh源码学习
image: https://picsum.photos/536/354?random&date=2021-04-01
date: 2021-04-01
vssue-title: vuepress-plugin-img-lazy
tags:
  - js 
  - 源码 
  - loadsh
  - 工具库
categories:
  - 前端
---

<font color="red">loadsh</font> 是我们平时用的很多的工具函数库，这篇文章来了解一下 <font color="red">loadsh</font> 中的 <font color="red">add</font> 函数。

<!-- more -->

### add简介
> Adds two numbers

官方源码中给出这样的注解，两个数字的相加。所以我的第一印象是这个函数只争对数字，其实不然，它同样支持字符串的相加。同样可以理解为它支持的是 <font color='red'>js</font> 的加法规则。

### add函数的使用方法
```js
import assert from 'assert';
import add from '../add.js';

describe('add', function() {
  it('should add two numbers', function() {
    assert.strictEqual(add(6, 4), 10);
    assert.strictEqual(add(-6, 4), -2);
    assert.strictEqual(add(-6, -4), -10);
  });

  it('should not coerce arguments to numbers', function() {
    assert.strictEqual(add('6', '4'), '64');
    assert.strictEqual(add('x', 'y'), 'xy');
  });
});
```

### 函数分析
add.js
```js
import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
```
可以看出来 <font color="red">add</font> 不是单纯的返回两个参数相加的结果，而是调用了 <font color='red'>createMathOperation</font>。  
createMathOperation.js
```js
import baseToNumber from './baseToNumber.js'
import baseToString from './baseToString.js'

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
// (augend, addend) => augend + addend
function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    if (value !== undefined && other === undefined) {
      return value
    }
    if (other !== undefined && value === undefined) {
      return other
    }
    if (typeof value === 'string' || typeof other === 'string') {
      value = baseToString(value)
      other = baseToString(other)
    }
    else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    return operator(value, other)
  }
}

export default createMathOperation
```
此处，<font color='red'>createMathOperation</font> 接受两个参数，其一 <font color='red'>operator</font>, 其二 <font color='red'>defaultValue</font>。
>operator: (augend, addend) => augend + addend  
>defaultValue: 0

然后返回一个匿名函数，匿名函数具有两个参数，其实就是<font color='red'>add</font> 中的 <font color='red'>augend</font> 和 <font color='red'>addend</font>。匿名函数返回 <font color='red'>operator</font>, 最后得出两个值相加的值。  
里面的一大堆就是对 <font color='red'>operator</font> 的两个参数做处理。  
如果两个参数都是 <font color='red'>undefined</font> 那么就返回 <font color='red'>defaultValue</font>。  
如果其中一个值是 <font color='red'>undefined</font> 而另外一个值不是 <font color='red'>undefined</font>，那么就返回不是 <font color='red'>undefined</font> 的值。
当其中一个值是 <font color='red'>string</font> 的时候调用 <font color='red'>baseToString</font> 将两个值转换为字符串。 

baseToString.js
```js
import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/** Used to convert symbols to primitives and strings. */
const symbolToString = Symbol.prototype.toString

/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') { 
    return value
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    // 如果是数组，将数组转换为字符串
    return `${value.map(baseToString)}`
  }
  if (isSymbol(value)) {
    // 如果是symbol类型，也将其转换为字符串
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = `${value}`
  // 最后将和-0对比
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}

export default baseToString
```

baseToNumber.js
```js
import isSymbol from '../isSymbol.js'

/** Used as references for various `Number` constants. */
const NAN = 0 / 0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {
  if (typeof value === 'number') {
    return value
  }
  if (isSymbol(value)) {
    return NAN
  }
  return +value
}

export default baseToNumber
```
