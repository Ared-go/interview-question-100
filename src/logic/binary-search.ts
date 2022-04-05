/*
 * @Descripttion: 二分查找
 * @version: 
 * @Author: ared
 * @Date: 2022-04-04 22:18:04
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 09:43:09
 */
/**
 * @name: 
 * @msg: 循环实现二分查找
 * @param {number} arr
 * @param {number} target
 * @return {*}
 */
export function binarySearch(arr:number[], target:number) {
  if(arr.length === 0) return -1
  let startIndex = 0
  let endIndex = arr.length -1
  // let middIndex = 
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    let middleValue = arr[middleIndex]
    if(target < middleValue) {
      // 目标值小于中间值
      endIndex = middleIndex - 1
    } else if(target > middleValue) {
      // 目标值大于中间值
      startIndex = middleIndex + 1
    }else {
      // console.log('目标值等于中间值')
      return middleIndex
    }
  }
  return -1
}
export function binarySearch2(arr:number[], target:number, startIndex?:number, endIndex?:number):number {
  let len = arr.length
  if(len === 0) return -1
  
  if(startIndex == null) startIndex = 0
  if(endIndex == null) endIndex = len - 1

  // 开始索引大于结束索引 就返回-1
  if(startIndex > endIndex) return -1

  // 中间位置
  let midIndex = Math.floor((startIndex + endIndex) / 2)
  let midValue = arr[midIndex]

  if(target < midValue) {
    // 需要在左侧查找
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  }else if(target > midValue){
    // 需要在右侧查找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}
let arr = [10, 20, 30, 40, 50, 60]
const target = 20
// console.log(binarySearch2(arr, target))

// 性能测试
// 循环测试 数量级越大 差距越明显 递归会快一些
console.time('binarySearch')
for(let i = 0; i< 1000 * 10000; i++) {
  binarySearch(arr, target)
}
console.timeEnd('binarySearch')

// 递归测试
console.time('binarySearch2')
for(let i = 0; i< 1000 * 10000; i++) {
  binarySearch2(arr, target)
}
console.timeEnd('binarySearch2')