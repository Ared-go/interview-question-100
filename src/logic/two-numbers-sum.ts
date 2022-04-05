/*
 * @Descripttion: 两数之和为n的两个数
 * @version: 
 * @Author: ared
 * @Date: 2022-04-05 09:44:51
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 12:56:48
 */

/**
 * @name: 寻找和为n的两个数
 * @msg: 
 * @param {number} arr 
 * @param {*} n 和为多少
 * @return {*}
 */
// 时间复杂度为O(n^2)
export function twoNumbersSum(arr:number[], n:number):number[] {
  let res:number[] = []
  const len = arr.length
  if(len === 0) return res
  for(let i = 0; i<len-1; i++) {
    let n1 = arr[i]
    // 结果标志位 提早结束循环
    let flag = false
    for(let j = i+1; j <len; j++) {
      let n2 = arr[j]
      if(n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }
    if(flag) break
  }
  return res
}

// 时间复杂度 O(n)
export function twoNumbersSum2(arr:number[], n:number):number[] {
  let len = arr.length 
  let res:number[] = []
  if(len === 0) return res
  let i = 0 // 头
  let j = len-1 // 尾
  while(i<j) {
    let n1 = arr[i]
    let n2 = arr[j]
    let sum = n1 + n2

    if(sum < n) {
      // 对应的值小了 i要向后移动
      i++
    }else if(sum > n) {
      // 对应的值大了 j要向前移动
      j--
    }else {
      res.push(n1)
      res.push(n2)
      break
    }
  }
  return res
}

let arr = [1,2,3,41,2,3,41,2,1,2,3,41,2,3,41,21,2,3,41,2,3,41,2,3,41,2,3,41,2,3,4,5,6,14]
let res = twoNumbersSum2(arr, 16)
console.log(res)

console.time('twoNumbersSum') // 113ms
for(let i = 0; i < 100 * 10000; i++) {
  twoNumbersSum(arr, 16)
}
console.timeEnd('twoNumbersSum')

console.time('twoNumbersSum2') // 33ms
for(let i = 0; i < 100 * 10000; i++) {
  twoNumbersSum2(arr, 16)
}
console.timeEnd('twoNumbersSum2')

