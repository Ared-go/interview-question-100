/*
 * @Descripttion: 二叉搜索树
 * @version: 
 * @Author: ared
 * @Date: 2022-04-05 15:31:26
 * @LastEditors: ared
 * @LastEditTime: 2022-04-06 20:20:18
 */

interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}


let arr:number[] = []
// 寻找二叉搜索树的第k小值
export function getKthValue(node:ITreeNode, k:number): number | null {
  inOrderTraverse(node)
  console.log(arr)
  return arr[k - 1] || null
}
export const bst:ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null 
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}
/**
 * @name:  先序遍历
 * @msg: 
 * @param {ITreeNode} node
 * @return {*}
 */
function preOrderTraverse(node:ITreeNode | null) {
  if(node == null) return null
  // console.log(node.value)
  arr.push(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}
/**
 * @name: 中序遍历
 * @msg: 
 * @param {ITreeNode} node
 * @return {*}
 */
function inOrderTraverse(node:ITreeNode | null) {
  if(node == null) return null
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

function postOrderTraverse(node:ITreeNode | null) {
  if(node == null ) return null
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  // console.log(node.value) 
  arr.push(node.value)
}
// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)

console.log(getKthValue(bst, 3))