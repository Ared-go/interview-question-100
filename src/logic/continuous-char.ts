/*
 * @Descripttion: 字符串中查找连续最多的字符及次数
 * @version: 
 * @Author: ared
 * @Date: 2022-04-09 20:06:16
 * @LastEditors: ared
 * @LastEditTime: 2022-04-09 22:31:24
 */
interface IRes {
  char: string
  length: number
}
/**
 * @name: 连续最多的字符及次数
 * @msg: 时间复杂度 O(n) 这里存在跳步，正常来说O(n^2)
 * @param {string} str
 * @return {*}
 */
export function findContinuousChar1(str:string):IRes {
  const res:IRes = {
    char: '',
    length: 0
  }
  const length = str.length
  if(length === 0)  return res

  let tempLength = 0 // 临时记录当前连续字符串的长度
  for(let i = 0; i < length; i++) {
    tempLength = 0
    for(let j = i; j < length; j++) {
        if(str[i] === str[j]) {
          tempLength++
        }
        if(str[i] !== str[j] || j === length -1 ) {
          // 不相等或者已经到了最后一项 判断最大值
          if(tempLength > res.length) {
            res.char = str[i]
            res.length = tempLength
          }
          // 还没有遍历完
          if(i < length -1) {
            // 跳步
            i = j - 1 // 这里不是i = j的原因是 后面i还会++
          }
          break
        }
    }
  }

  return res
}
/**
 * @name: 连续最多的字符及次数
 * @msg: 双指针 O(n)
 * @param {string} str
 * @return {*}
 */
export function findContinuousChar2(str:string):IRes {
  const res = {
    char: '',
    length: 0
  }
  const length = str.length
  if(length === 0) return res
// debugger
  let i = 0
  let j = 0
  let tempLength = 0
  for(; i < length; i++) {
    if(str[i] === str[j]) {
      tempLength++
    }
    if(str[i] !== str[j] || i === length - 1) {
      if(tempLength > res.length) {
        res.char = str[j]
        res.length = tempLength
      }
      tempLength = 0 // 重置
      if(i < length - 1 ) { // 循环还没有结束
        j = i // 让j追上i 
        i-- // 细节
      }
    }
  }
  return res
}
/**
 * @name: 
 * @msg: 性能最高 分支切换最少
 * @param {string} str
 * @return {*}
 */
export function findContinuousChar3(str:string):IRes{
  const res = {
    char: '',
    length: 0
  }
  const length = str.length
  if(length === 0) return res
  let i  = 0 
  let j = 0
  // 这里的判断条件是i 这样可以执行到代码最后 并进行一次比较
  while(i < length) {
    if(str[i] !== str[j]) { // 执行到最后一个字符也会进行一次比较操作 
      if(j-i > res.length) {
        res.char = str[i]
        res.length = j - i
      }
      i = j
    }
    j++
  }
  return res
}
// 功能测试 
let str = 'aabbccdddddeee11333333'

// console.log(findContinuousChar1(str))
console.log(findContinuousChar3(str))

// 性能测试
let str1 = ''
for(let i = 0; i < 100 * 10000; i++) {
  str1 += i.toString()
}

console.time('findContinuousChar1')
findContinuousChar1(str1)
console.timeEnd('findContinuousChar1') // 193ms

console.time('findContinuousChar2')
findContinuousChar2(str1)
console.timeEnd('findContinuousChar2') // 198ms

console.time('findContinuousChar3')
findContinuousChar3(str1)
console.timeEnd('findContinuousChar3') // 62ms