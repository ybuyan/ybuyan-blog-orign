---
title: loadsh源码 -- difference
display: home
lang: zh
description: loadsh源码学习
image: https://picsum.photos/536/354?random&date=2021-04-11
date: 2021-04-11
vssue-title: vuepress-plugin-img-lazy
tags:
  - js 
  - 源码 
  - loadsh
categories:
  - web前端
---

loadsh真的是对js的运用做到了极致细节。不得不感叹这才是艺术。

<!-- more -->

### difference 介绍
loadsh数组中的一个方法，故而争对的是数组。其方法可以找出两个数组中的不同项。最后返回的值是一个新的数组，不会去改变原数组，所以它不同于loadsh的另一个方法pullall，pullall会改变原数组。  

### 源码difference
```js
import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import isArrayLikeObject from './isArrayLikeObject.js'

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}
```
与其他的方法差不多，方法difference将返回一个函数baseDifference(这才是关键代码)。但是在这个方法返回之前回去调用isArrayLikeObject来对参数array做判断，判断是不是数组或者类数组。  
```js
// isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value)
}
// isObjectLike.js
function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}
// isArrayLike.js
function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

```
当array满足以上条件时将会返回baseDifference，值得了解的isLength这个方法：
```js
/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */
function isLength(value) {
  return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
```
这个length是大于等于0切小于等于9007199254740991的整数。为什么是9007199254740991？  
因为js中的最大精确数值是2^53-1 = 9007199254740991(真的是极致的细节)。  
接下来我们进入到主题baseDifference.js
```js
import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 *
 * @private
 * @param {Array} array The array to inspect. 被检查的数组
 * @param {Array} values The values to exclude. 被排查的数组
 * @param {Function} [iteratee] The iteratee invoked per element. 迭代器 -- differenceby
 * @param {Function} [comparator] The comparator invoked per element. 比较器 -- differencewith
 * @returns {Array} Returns the new array of filtered values. 返回值，基于第一份参数
 */
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  if (!array.length) { // !0 -- true !!0 -- false
    return result
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }
  // 标签语法
  outer:
  for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value)

    value = (comparator || value !== 0) ? value : 0
    // 排除NaN， NaN !== NaN
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      // 双层循环，找出不同项
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer // 跳转到外层循环
        }
      }
      result.push(value)
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }
  return result
}

export default baseDifference
```
当iteratee存在时，也可以说是使用differenceby时，会去调用map将数组values的迭代一遍。  
map.js
```js
/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */
function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

export default map
```
如果iteratee是一个字符串，例如"x",那么他会把集合中所有的"x"提取出来形成一个新的数组。所以当需要对比两个数组对象的不同时，differenceby(arr1, arr2, 'filed')，这时就会返回两个数组中filed字段不同的那些项。