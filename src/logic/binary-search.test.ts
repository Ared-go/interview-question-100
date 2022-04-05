/*
 * @Descripttion: 二分查找 单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-05 09:02:35
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 09:18:16
 */
import {binarySearch, binarySearch2} from './binary-search'

describe('二分查找', () => {
  it('正常情况', () => {
    const arr = [100, 200, 300, 400, 500]
    const target = 300
    const res = binarySearch(arr, target)
    expect(res).toBe(2)
  })

  it('空数组', () => {
    const arr:number[] = []
    const target = 300
    const res = binarySearch(arr, target)
    expect(res).toBe(-1)
  })

  it('找不到值', () => {
    const arr = [100, 200, 300, 400, 500]
    const target = 40
    const res = binarySearch(arr, target)
    expect(res).toBe(-1)
  })
})