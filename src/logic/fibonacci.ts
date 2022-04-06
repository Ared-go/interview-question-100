/*
 * @Descripttion: 斐波那契数列 
 * @version: 
 * @Author: ared
 * @Date: 2022-04-06 20:36:39
 * @LastEditors: ared
 * @LastEditTime: 2022-04-06 22:18:02
 */

// 时间复杂度 O(2^n)
function fibonacci(n:number):number {
  if(n <= 0) return 0
  if(n === 1) return 1
  return fibonacci(n -1) + fibonacci(n-2)
}

/**
 * @name: 循环实现斐波那契数列
 * @msg: 
 * @param {*}
 * @return {*}
 */

export function fibonacci2(n:number):number {
  if(n <= 0) return 0
  if(n === 1) return 1

  let n1 = 1 // 记录n-1的结果
  let n2 = 0 // 记录n-2的结果
  let res = 0
  for(let i = 2; i<=n; i++) {
     res = n1 + n2 
     n2 = n1 
     n1 = res
  }
  return res
}

// 功能测试
console.log(fibonacci(20), 'fibonacci is')
console.log(fibonacci2(6),'fibonacci2 is')