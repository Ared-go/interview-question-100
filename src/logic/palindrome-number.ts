/*
 * @Descripttion: 寻找回文数
 * @version: 
 * @Author: ared
 * @Date: 2022-04-10 16:30:54
 * @LastEditors: ared
 * @LastEditTime: 2022-04-10 17:40:13
 */

/**
 * @name: 查询 1 - max的对称数（数组反转）
 * @msg: 
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers1(max:number):number[] {
  if(max <= 0) return []

  let res:number[] = []
  for(let i = 1; i <= max; i++) {
    const s = i.toString()
    if(s === s.split('').reverse().join('')) {
      res.push(i)
    }
  }
  return res
}
/**
 * @name: 查询 1 - max的对称数（字符首尾对比）
 * @msg: 
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers2(max:number):number[] {
  if(max <= 0) return []

  let res:number[] = []
  
  for(let i = 1; i <= max; i++) {
    let s = i.toString()
    let length = s.length
    let startIndex = 0
    let endIndex = length - 1
    let flag = true // 是否为回文数

    while(startIndex < endIndex) {
      if(s[startIndex] !== s[endIndex]) {
        flag = false
        break
      }else {
        startIndex++
        endIndex--
      }
    }
    if(flag) {
      res.push(i)
    }
  }
  return res
}

/**
 * @name: 查询 1 - max的对称数（数组反转）
 * @msg: 
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers3(max:number):number[] {
  if(max <= 0) return []
  let res:number[] = []
  for(let i = 1; i <= max; i++) {
    let n = i
    let rev = 0   // 存储翻转数

    // 生成翻转数
    while(n > 0) {
      rev = rev * 10 + n % 10
      n = Math.floor(n / 10)
    }
    if(rev === i) res.push(i) 
  } 
  return res
}
console.log(findPalindromeNumbers1(200))
console.log(findPalindromeNumbers2(200))
console.log(findPalindromeNumbers3(200))



// 性能测试
console.time('findPalindromeNumbers1')
findPalindromeNumbers1(100 * 10000)
console.timeEnd('findPalindromeNumbers1') // 610ms

console.time('findPalindromeNumbers2')
findPalindromeNumbers2(100 * 10000)
console.timeEnd('findPalindromeNumbers2') // 72ms

console.time('findPalindromeNumbers3')
findPalindromeNumbers3(100 * 10000)
console.timeEnd('findPalindromeNumbers3') // 48ms