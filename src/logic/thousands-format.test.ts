/*
 * @Descripttion: 千分位格式化
 * @version: 
 * @Author: ared
 * @Date: 2022-04-11 22:02:59
 * @LastEditors: ared
 * @LastEditTime: 2022-04-11 22:12:44
 */
import {format1 , format2} from './thousands-format'
describe('千分位格式化', () => {
  it('正常情况', () => {
       let num = 11233345
       expect(format2(num)).toBe('11,233,345')
  })
  it('小于等于1000',() => {
    expect(format2(0)).toBe('0')
    expect(format2(100)).toBe('100')
    expect(format2(1000)).toBe('1,000')
  })
})


