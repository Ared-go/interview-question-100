/*
 * @Descripttion: 链表实现队列 单元测试
 * @version: 
 * @Author: ared
 * @Date: 2022-04-04 20:35:26
 * @LastEditors: ared
 * @LastEditTime: 2022-04-04 23:34:26
 */
import MyQueue from './queue-with-list'

describe('链表实现队列', () => {
  it('add and length', () => {
    const queue = new MyQueue()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    const len = queue.length
    expect(len).toBe(3)
  })
  it('delete', () => {
    const queue = new MyQueue()
    const res = queue.delete()
    expect(res).toBeNull()
    queue.add(100)
    queue.add(200)
    queue.add(300)
    const res1 = queue.delete()
    const res2 = queue.delete()
    const res3 = queue.delete()
    const res4 = queue.delete()
    expect(res1).toBe(100)
    expect(res2).toBe(200)
    expect(res3).toBe(300)
    expect(res4).toBeNull()
  })
})