/*
 * @Descripttion: 链表实现队列
 * @version: 
 * @Author: ared
 * @Date: 2022-04-04 18:36:17
 * @LastEditors: ared
 * @LastEditTime: 2022-04-04 22:08:06
 */

interface ILinkList {
  value: number
  next: ILinkList | null
}
export default class MyQueue {
  private head:ILinkList | null = null
  private tail:ILinkList | null = null
  private len:number = 0
  constructor() {

  }
  add(n:number){
    const newNode:ILinkList =  {
      value:n,
      next: null
    }
    // 处理head
    if(this.head == null) {
      this.head = newNode
    }
    // 处理tail 
    // 获取当前的尾结点
    const tailNode = this.tail
    if(tailNode) {
      tailNode.next = newNode
    }
    // 将tail指向新增节点
    this.tail = newNode
    this.len++
  }
  delete():number | null {
    const headNode = this.head
    // 头结点为空 
    if(headNode == null) return null
    // 长度为0
    if(this.len <=0) return null
    //  取出值
    const value = headNode.value
    // 更改head的指向
    this.head = headNode.next
    // 长度减一
    this.len--
    return value
  }
  get length():number {
    // length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)） 
    return this.len
  }
}

// const queue = new MyQueue()
// queue.add(10)
// queue.add(20)
// queue.add(30)
// console.log('length',queue.length)
// console.log(queue.delete());
// console.log('length1',queue.length)
// console.log(queue.delete());
// console.log('length2',queue.length)
// console.log(queue.delete());
// console.log('length3',queue.length)



// 性能检测  空间复杂度都为O(n)  时间复杂度 add: 链表 O(1) 数组 O(1)  delete: 链表 O(1) 数组: O(n)
const queue = new MyQueue()
console.time('queue with list') // 21 ms
for(let i = 0; i< 10 * 10000; i++) {
  queue.add(i)
}

for(let i = 0; i< 10 * 10000; i++) {
  queue.delete()
}
console.timeEnd('queue with list')


//@ts-ignore
const q:number[] = []   // 497ms
console.time('queue with array')
for(let i = 0; i < 10 * 10000; i++) {
  q.push(i)
}
for(let i = 0; i < 10 * 10000; i++) {
  q.shift()
}
console.timeEnd('queue with array')


