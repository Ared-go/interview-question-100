/*
 * @Descripttion: 切换字母大小写
 * @version: 
 * @Author: ared
 * @Date: 2022-04-12 23:41:20
 * @LastEditors: ared
 * @LastEditTime: 2022-04-13 20:48:58
 */

/**
 * @name: 使用正则表达式
 * @msg: 
 * @param {string} str
 * @return {*}
 */
export function switchLetterCase1(str:string):string {
  const length = str.length
  if(length === 0) return ''
  let res= ''
  let reg1 = /[a-z]/
  let reg2 = /[A-Z]/

  for(let i = 0; i < length; i++) {
    const s = str[i]
    if(reg1.test(s)) {
      // 小写字母
      res += s.toUpperCase()
    }else if(reg2.test(s)) {
      // 大写字母
      res += s.toLowerCase()
    } else {
      res += s
    }
  }

  return res

}

/**
 * @name: 使用ASCII码
 * @msg: 
 * @param {string} str
 * @return {*}
 */
export function switchLetterCase2(str:string):string {
  const length = str.length
  if(length === 0) return ''
  let res = ''
  for(let i = 0; i< length; i++) {
    const s = str[i] 
    const code = str.charCodeAt(i)
    if(code >= 65 && code <= 90) {
      // 大写字母
      res += s.toLowerCase()
    } else if(code >= 97 && code <= 122) {
      // 小写字母
      res += s.toUpperCase()
    } else {
      res += s
    }
  }
  return res
}
// 功能测试
let str = '12aBCdEf8**7&'
console.log(switchLetterCase2(str))


// 性能测试

let str1 = '12aBCdEf8**7&12aBCdEf8**7&12aBCdEf8**7&12aBCdEf8**7&12aBCdEf8**7&12aBCdEf8**7&'

console.time('switchLetterCase1')
for(let i = 0; i < 10 * 10000; i++) {
  switchLetterCase1(str1)
}
console.timeEnd('switchLetterCase1') //  482ms


console.time('switchLetterCase2')
for(let i = 0; i < 10 * 10000; i++) {
  switchLetterCase2(str1)
}
console.timeEnd('switchLetterCase2') // 177ms