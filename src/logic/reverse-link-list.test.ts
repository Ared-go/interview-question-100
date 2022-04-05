/*
 * @Descripttion: 单元测试反转列表
 * @version: 
 * @Author: ared
 * @Date: 2022-04-03 22:50:02
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 12:57:05
 */


import {ILinkListNode, reverseLinkList, createLinkList} from './reverse-link-list'

describe('反转链表',() => {
  it('单个反转', () => {
    let linkListNode:ILinkListNode = {value: 100}
    let res = reverseLinkList(linkListNode)
    console.log(res, 'res is')
    expect(res).toEqual({value:100})
  })
  it('多个反转', () => {
    let arr = [100,200, 300]
    let linkListNode:ILinkListNode | null = createLinkList(arr)
    let res = reverseLinkList(linkListNode as ILinkListNode)
    expect(res).toEqual({
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100
        }
      }
    })
  })
})

