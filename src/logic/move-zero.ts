/*
 * @Descripttion: 移动 0 到数组末尾
 * @version: 
 * @Author: ared
 * @Date: 2022-04-09 14:40:36
 * @LastEditors: ared
 * @LastEditTime: 2022-04-09 19:52:01
 */
/**
 * @name: 
 * @msg: 时间复杂度O(n^2)
 * @param {number} arr
 * @return {*}
 */
export function moveZero(arr: number[]):void {
  let length = arr.length 
  if(length === 0) return 
  let zeroLength = 0
  for(let i = 0; i< length - zeroLength; i++) {
    if(arr[i] === 0) {
      arr.push(0)
      arr.splice(i,1) // 该api 本身就有复杂度O(n)
      i-- // 
      zeroLength++ // 累加0的长度
    }
  }
}
/**
 * @name: 移动0到数组末尾
 * @msg: 时间复杂度O(n)
 * @param {number} arr
 * @return {*}
 */
export function moveZero2(arr:number[]):void {
  const length = arr.length
  if(length === 0) return 
  let i 
  let j = -1 // 指向第一个0
  for(let i = 0; i < length; i++) {
    if(arr[i] === 0) {
      if(j < 0) {
        j = i
      }
    }
    if(arr[i] !== 0 && j >= 0) {
      // 互换位置
      let n = arr[i]
      arr[i] = arr[j]
      arr[j] = n
      j++
    } 
  }
}

let arr = [1,0,0,0,2,3,4]
moveZero2(arr)
console.log(arr, 'arr is')

// 性能测试
const arr1 = []

for(let i = 0; i < 20 * 10000; i++) {
  if(i % 10 === 0) {
    arr1.push(0)
  }else {
    arr1.push(i)
  }
}
console.time('moveZero1')
moveZero(arr1)
console.timeEnd('moveZero1') // 300ms

const arr2 = []

for(let i = 0; i < 20 * 10000; i++) {
  if(i % 10 === 0) {
    arr2.push(0)
  }else {
    arr2.push(i)
  }
}
console.time('moveZero1')
moveZero2(arr2)
console.timeEnd('moveZero1') // 2.59ms
