/*
 * @Descripttion: 千分位格式化
 * @version: 
 * @Author: ared
 * @Date: 2022-04-11 20:49:26
 * @LastEditors: ared
 * @LastEditTime: 2022-04-11 22:26:55
 */

import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"


export function format1(n:number):string {
   n = Math.floor(n) // 只处理整数
   let s = n.toString()
   let arr = s.split('').reverse()
   return arr.reduce((prev ,val , index) => {
    if(index % 3 === 0) {
      if(prev) {
        return val + ',' + prev
      }else {
        return val
      }
    } else {
      return val + prev
    }
   }, '')
}
// 100
export function format2(n:number):string {
  n = Math.floor(n) // 只处理整数
  let s = n.toString()
  let length = s.length
  let res = ''
  for(let i = length - 1; i >= 0; i--) {
      let j = length - i
      if(j % 3 === 0) {
        if(i === 0) {
          res = s[i] + res
        }else {
          res =  ',' + s[i] + res
        }
      }else {
        res = s[i] + res
      }
  }
  return res
}
let num = 11233345
console.log(format1(num))
console.log(format2(num))


// 性能测试

let num1 = 111000111234

console.time('format1')
for(let i = 0; i < 10 * 1000; i++) {
  format1(num1)
}
console.timeEnd('format1') // 22ms 

console.time('format2')
for(let i = 0; i < 10 * 1000; i++) {
  format2(num1)
}
console.timeEnd('format2') // 8ms