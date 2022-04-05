/*
 * @Descripttion: unit test
 * @version: 
 * @Author: ared
 * @Date: 2022-04-01 21:28:56
 * @LastEditors: ared
 * @LastEditTime: 2022-04-01 21:39:34
 */
import Myqueue from './two-stacks-one-queue'

describe('两个栈实现一个队列',() => {
  it('add and length', () => {
    const q = new Myqueue()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })  
  it('delete', () => {
    const q = new Myqueue()
    expect(q.delete2()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.delete2()).toBe(100)
    expect(q.length).toBe(2)
    expect(q.delete2()).toBe(200)
    expect(q.length).toBe(1)
  })
})
