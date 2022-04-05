/*
 * @Descripttion: 根据数组创建单向链表
 * @version: 1
 * @Author: ared
 * @Date: 2022-04-03 20:57:32
 * @LastEditors: ared
 * @LastEditTime: 2022-04-04 14:05:46
 */

export interface ILinkListNode {
  value:number
  next?: ILinkListNode
}
/**
 * @name: 链表反转
 * @msg: 节点next指向前一个节点，很容易造成nextNode的丢失，需要三个指针 prevNode curNode nextNode
 * @param {*}
 * @return {*}
 */
export function reverseLinkList(listNode:ILinkListNode):(ILinkListNode | undefined) {
  let prevNode:ILinkListNode | undefined = undefined
  let curNode:ILinkListNode | undefined = undefined
  let nextNode:ILinkListNode| undefined = listNode
  while(nextNode) {
    // 避免循环应用
    if(curNode && !prevNode) {
      delete curNode.next      
    }
    // 反转指针
    if(curNode && prevNode) {
      curNode.next = prevNode
    }
    // 整体向后移动
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  curNode!.next = prevNode
  return curNode
}
export function createLinkList(arr:number[]):(ILinkListNode | null) {
  if(arr.length === 0) return null
  let length:number = arr.length
  let curNode:ILinkListNode = {
    value: arr[length - 1]
  }
  if(arr.length === 1) return curNode 
  for(let i = length -2; i>=0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

let arr:number[] = [100,200, 300,400]
let listNode = createLinkList(arr)
console.log(createLinkList(arr))
console.log(reverseLinkList(listNode as ILinkListNode))



