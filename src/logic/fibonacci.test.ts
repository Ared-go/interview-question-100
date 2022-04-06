/*
 * @Descripttion: 斐波那契数列单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-06 21:17:25
 * @LastEditors: ared
 * @LastEditTime: 2022-04-06 22:18:40
 */
import {fibonacci2} from './fibonacci'

describe('斐波那契数列', () => {
  it('0和1', () => {
    expect(fibonacci2(0)).toBe(0)
    expect(fibonacci2(1)).toBe(1)
  })

  it('正常情况', () => {
    expect(fibonacci2(2)).toBe(1)
    expect(fibonacci2(3)).toBe(2)
    expect(fibonacci2(4)).toBe(3)
    expect(fibonacci2(5)).toBe(5)
  })

  it('小于0', () => {
    expect(fibonacci2(-1)).toBe(0)
  })
})