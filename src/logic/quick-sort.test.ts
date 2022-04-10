/*
 * @Descripttion: 快速排序 单元测试
 * @Author: ared
 * @Date: 2022-04-10 13:33:18
 * @LastEditors: ared
 * @LastEditTime: 2022-04-10 13:44:01
 */


import { quickSort1, quickSort2 } from "./quick-sort";

describe('快速排序', () => {
  it('正常情况', () => {
    const arr = [2,6,5,7,4,3,8,1]
    const res = quickSort1(arr)
    expect(res).toEqual([1,2,3,4,5,6,7,8])
  })
  it('负数情况', () => {
    const arr = [-1,1, 6, 4, 3, 8, -2]
    const res = quickSort1(arr)
    expect(res).toEqual([-2, -1, 1, 3, 4, 6, 8])
  })
  it('相同元素情况', () => {
    const arr = [1,1,1,1,1,1]
    const res = quickSort1(arr)
    expect(res).toEqual([1,1,1,1,1,1])
  })
  it('空数组', () => {
    const arr = []
    const res = quickSort1([])
    expect(res).toEqual([])
  })
})