/*
 * @Descripttion: 两数之和为n的两个数
 * @version: 
 * @Author: ared
 * @Date: 2022-04-05 10:10:52
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 11:45:03
 */

import {twoNumbersSum, twoNumbersSum2} from './two-numbers-sum'

describe('两数之和等于', () => {
  it('正常情况', () => {
    let arr = [1,2,3,4,5,6,14]
    let res = twoNumbersSum(arr, 15)
    let res2 = twoNumbersSum2(arr, 15)
    expect(res).toEqual([1,14])
    expect(res2).toEqual([1,14])
  })
  it('数组为空', () => {
    let arr:number[] = []
    let res = twoNumbersSum2(arr, 15)
    expect(res).toEqual([])
  })
  it('找不到值', () => {
    let arr = [1,2,3,4,5,6,14]
    let res = twoNumbersSum2(arr, 100)
    expect(res).toEqual([])
  })
})

