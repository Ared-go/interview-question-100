/*
 * @Descripttion: 移动0到数组末尾 单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-09 15:20:06
 * @LastEditors: ared
 * @LastEditTime: 2022-04-09 19:45:07
 */


import {moveZero, moveZero2} from './move-zero'

describe('移动0到数组末尾', () => {
  it('正常情况', () => {
    let arr = [1,0,0, 3, 4, 0, 0 ]
    moveZero2(arr)
    expect(arr).toEqual([1,3,4,0, 0, 0, 0])
  })
  it('没有0', () => {
    let arr = [1,2,3,4,5]
    moveZero2(arr)
    expect(arr).toEqual([1,2,3,4,5])
  })
  it('数组元素全为0的情况', () => {
    let arr = [0, 0, 0, 0, 0]
    
    moveZero2(arr)
    expect(arr).toEqual([0, 0, 0, 0, 0])
  })
})
