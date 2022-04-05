/*
 * @Descripttion: 两个栈实现一个队列
 * @version: 
 * @Author: ared
 * @Date: 2022-04-01 20:36:25
 * @LastEditors: ared
 * @LastEditTime: 2022-04-01 21:40:50
 */

export default class MyQueue{
  private stack1:number[] = []
  private stack2:number[] = []

  constructor() {

  }
  add(n:number) {
    this.stack1.push(n)
  }
  // 时间复杂度
  delete():number | null {
    let res 
    let stack1 = this.stack1
    let stack2 = this.stack2
    stack2 = stack1.reverse()
    console.log(stack2,'stack2 is')
    res = stack2.pop()
    stack1 = stack2.reverse() 
    return res || null
  }
  // 时间复杂度 O(n) 空间复杂度 整体是O(n)
  delete2():number | null {
    let res
    let stack1 = this.stack1, stack2 = this.stack2
    while(stack1.length) {
      const n = stack1.pop()
      if(n !== null) {
        stack2.push(n as number)
      }
    }
    res = stack2.pop()
    while(stack2.length) {
      const n  = stack2.pop()
      if(n !== null) {
        stack1.push(n as number)
      }
    }
    return res || null
  }

  get length() {
    return this.stack1.length
  }
}

const queue = new MyQueue()
const queue2 = new MyQueue()
queue.add(1)
queue.add(2)
queue.add(3)
queue2.add(1)
queue2.add(2)
queue2.add(3)

console.log(queue.length)


console.time('queue2')
console.log(queue2.delete2())
console.timeEnd('queue2')


console.time('queue')
console.log(queue.delete())
console.timeEnd('queue')
