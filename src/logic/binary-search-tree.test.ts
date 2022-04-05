/*
 * @Descripttion: 二叉搜索树
 * @version: 
 * @Author: ared
 * @Date: 2022-04-05 16:27:41
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 16:33:06
 */

import {getKthValue, bst} from './binary-search-tree'

describe('二叉搜索树', () => {
  it('正常情况', () => {
    const res = getKthValue(bst, 3)
    expect(res).toBe(4)
  })
  it('k 不再正常范围内', () => {
    const res1 = getKthValue(bst, 0)
    expect(res1).toBeNull()
    const res2 = getKthValue(bst, 100)
    expect(res2).toBeNull()
  })
})