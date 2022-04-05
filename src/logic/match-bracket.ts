// 判断字符串是否括号匹配
// * 一个字符串s可能包含{}()[]三种括号
// * 判断s是否是括号匹配的
// 考察 栈
// 栈 VS 数组 两者没有任何区别和联系（逻辑结构 VS 物理结构） 栈就是栈 数组就是数组

function isMatch(left:string, right:string):boolean {
  console.log(left, 'left is', right, 'right is')
  if(left === '(' && right === ')') return true  
  if(left === '{' && right === '}') return true
  if(left === '[' && right === ']') return true  
  return false
}

//时间复杂度O(n) 空间复杂度O(n)
export default function matchBracket(str:string):boolean {
  if(str.length === 0) return false
  let stack = [],length = str.length
  let leftSymbols = '({['
  let rightSymbols = ')}]'
  for(let i = 0; i< length; i++) {
    const s = str[i]
    if(leftSymbols.includes(s)) {
      // 左括号 压栈
      stack.push(s)
    }else if(rightSymbols.includes(s)) {
      // 右括号 判断栈顶（是否出栈）
      const top = stack[stack.length-1]
      if(isMatch(top, s)) { 
        console.log('pop')
        stack.pop()
      }else {
        // 有一个不匹配就不匹配
        return false
      }
    }
  }
  console.log(stack, 'stack is')
  return stack.length === 0
}

const str = '(a{b[c)]d}e)'
const res = matchBracket(str)
console.log(res,'res is')