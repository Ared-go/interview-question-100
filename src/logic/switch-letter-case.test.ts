/*
 * @Descripttion: 切换字母大小写 单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-13 07:59:05
 * @LastEditors: ared
 * @LastEditTime: 2022-04-13 20:38:00
 */

import { switchLetterCase1, switchLetterCase2 } from "./switch-letter-case";

describe('切换字母大小写', () => {
  it('正常情况', () => {
    let str = '12aBCdEf8**7&'
    let res = switchLetterCase2(str)
    expect(res).toBe('12AbcDeF8**7&')
  })
  it('空字符串', () => {
    let str = ''
    let res = switchLetterCase2(str)
    expect(res).toBe('')
  })
  it('非字母', () => {
    let str = '12345678'
    let res = switchLetterCase2(str)
    expect(res).toBe('12345678')
  })
})