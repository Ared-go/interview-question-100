/*
 * @Descripttion: 回文数 单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-10 17:29:35
 * @LastEditors: ared
 * @LastEditTime: 2022-04-10 17:35:44
 */
import {findPalindromeNumbers1,findPalindromeNumbers2, findPalindromeNumbers3} from './palindrome-number'

describe('对称数', () => {
  it('正常情况', () => {
    const numbers = findPalindromeNumbers3(200)
    expect(numbers.length).toBe(28)
  })
  it('max小于0', () => {
    const numbers = findPalindromeNumbers3(-1)
    expect(numbers.length).toBe(0)
  })
})
