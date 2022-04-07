/*
 * @Descripttion: 
 * @version: 
 * @Author: ared
 * @Date: 2022-04-06 20:36:39
 * @LastEditors: ared
 * @LastEditTime: 2022-04-07 23:04:24
 */
/*
 * @Descripttion: 斐波那契数列 
 * @version: 
 * @Author: ared
 * @Date: 2022-04-06 20:36:39
 * @LastEditors: ared
 * @LastEditTime: 2022-04-07 21:51:24
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

function fibonacci3(n:number):number {
  if(n<=0) return 0
  let arr = [0, 1, 1]
  let i = 3
  while(i<=n) {
    arr[i] = arr[i-1] + arr[i-2]
    i++
  }
  return arr[n]
}
/**
 * @name: 青蛙跳台阶
 * @msg: 共有多少种跳法
 * @param {*}
 * @return {*}
 */
function jumpSteps(n:number):number {
  if( n === 1) return 1
  if( n === 2) return 2
  return jumpSteps(n - 1) + jumpSteps(n - 2) 
}


// 功能测试
console.log(fibonacci(20), 'fibonacci is')
console.log(fibonacci2(20),'fibonacci2 is')
console.log(fibonacci3(20),'fibonacci3 is')
console.log(jumpSteps(4
  ), '跳台阶共有多少种跳法')
