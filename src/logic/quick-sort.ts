/*
 * @Descripttion: 快速排序
 * @version: 
 * @Author: ared
 * @Date: 2022-04-10 13:05:11
 * @LastEditors: ared
 * @LastEditTime: 2022-04-10 16:19:20
 */

import { isTemplateLiteralTypeNode } from "typescript"


/**
 * @name: 快速排序（使用splice）
 * @msg: 时间复杂度 O(nlogn)
 * @param {number} arr
 * @return {*}
 */
export function quickSort1(arr:number[]):number[] {
  const length = arr.length 
  if(length === 0) return arr
  let midIndex = Math.floor(length / 2)
  let midValue = arr.splice(midIndex, 1)[0]


  let left:number[] = [] // 比midValue 小的放左边
  let right:number[] = [] // 比midValue 大的放右边
  // 注意 splice会修改原数组 这里要使用arr.length 动态的获取数组元素长度
  for(let i = 0; i < arr.length; i++) {
    let n = arr[i]
    if(n < midValue) {
      left.push(n)
    }else {
      right.push(n)
    }
  }
  return quickSort1(left).concat([midValue], quickSort1(right))
}
/**
 * @name: 快速排序（使用slice）
 * @msg: 时间复杂度
 * @param {number} arr
 * @return {*}
 */
 export function quickSort2(arr:number[]):number[] {
  const length = arr.length 
  if(length === 0) return arr
  let midIndex = Math.floor(length / 2)
  let midValue = arr.slice(midIndex, midIndex+1)[0]

  let left:number[] = [] // 比midValue 小的放左边
  let right:number[] = [] // 比midValue 大的放右边
  // O(n*logn) 遍历 * 二分
  for(let i = 0; i < length; i++) {
    // 过滤掉中间值 避免重复
    if(i !== midIndex) {
      let n = arr[i]
      if(n < midValue) {
        left.push(n)
      }else {
        right.push(n)
      }
    }
  }
  return quickSort2(left).concat([midValue], quickSort2(right))
}
// 功能测试
let arr1 = [2,4,3,6,5,8,7,1]
// console.log(quickSort1(arr1))
console.log(quickSort2(arr1))


let arr2 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr2.push(Math.random() * 1000)
}
console.time('quickSort1')
quickSort1(arr2)
console.timeEnd('quickSort1') // 82ms


let arr3 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr3.push(Math.random() * 1000)
}
console.time('quickSort2')
quickSort2(arr3)
console.timeEnd('quickSort2') // 74ms

// 区别不算太大  单独笔记splice和slice

let arr4 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr4.push(Math.random() * 1000)
}
console.time('splice')
arr4.splice(5 * 10000, 1)
console.timeEnd('splice') // splice: 0.054931640625 ms

let arr5 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr5.push(Math.random() * 1000)
}
console.time('slice')
arr5.slice(5* 10000, 5 * 10000 + 1)
console.timeEnd('slice') // slice: 0.0078125 ms