// 将一个数组旋转 k 步
// [1,2,3,4,5,6,7]
// k = 3， 即旋转3步
// 输出 [5,6,7,1,2,3,4]

// 时间复杂度O(n^2) 空间复杂度O(1)
export function rotate1(arr:number[], k:number):number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = Math.abs(k % length)
  for(let i = 0; i < step; i++) { // O(n)
      const item = arr.pop()
      if(item) {
        arr.unshift(item) // 数组是一个有序结构 unshift操作会非常慢!!! O(n)
      }
  }
  return arr
}

// 时间复杂度O(1) 空间复杂度O(n)
export function rotate2(arr:number[], k:number):number[] {
  const length = arr.length
  if(!k || length === 0) return arr
  const step = Math.abs(k % length)
  const part1 = arr.slice(-step)
  console.log(part1,'part1');
  const part2 = arr.slice(0, length - step)
  console.log(part2,'part2');

  const part3 = part1.concat(part2)
  return part3
}
let arr:number[] = [1,2,3,4,5,6,7]
// let arr2:number[] = rotate1(arr,3)
let arr3:number[] = rotate2(arr,3)
// console.log(arr2, 'rotate1 is')
console.log(arr3, 'rotate2 is')


console.time('push')
let arr2 = []
for(let i = 0; i< 10 * 10000; i++) {
  arr2.push(i)
}
console.timeEnd('push')


console.time('unshift')
for(let i = 0; i< arr2.length; i++) {
  arr2.unshift()
}
console.timeEnd('unshift')