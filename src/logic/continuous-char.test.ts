/*
 * @Descripttion: 连续的字符及次数
 * @version: 
 * @Author: ared
 * @Date: 2022-04-09 20:44:23
 * @LastEditors: ared
 * @LastEditTime: 2022-04-09 22:11:34
 */

import {findContinuousChar1, findContinuousChar2} from './continuous-char'

describe('连续最多的字符及次数', () => {
  it('正常情况', () => {
    let str = '111222aaabbbbbccccdddd'
    const res = findContinuousChar2(str)
    expect(res).toEqual({char:'b', length: 5})
  })
  it('空字符', () => {
    let str = ''
    const res = findContinuousChar2(str)
    expect(res).toEqual({char: '', length: 0})
  })
  it('无连续字符', () => {
    let str = 'abcdef'
    const res = findContinuousChar2(str)
    expect(res).toEqual({char: 'a', length: 1}) 
  })
  it('全部都为连续字符', () => {
    let str = 'aaaaaaaa'
    const res = findContinuousChar1(str)
    expect(res).toEqual({char: 'a', length: 8}) 
  })
})