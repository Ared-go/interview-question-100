/*
 * @Descripttion: 
 * @version: 
 * @Author: ared
 * @Date: 2022-03-27 14:36:41
 * @LastEditors: ared
 * @LastEditTime: 2022-04-05 14:30:31
 */
let timeout = (time) => new Promise((resolve, reject) => {
    setTimeout(reject, time, new Error('promise time out'))
})

function promiseTimeout(promise, time) {
    return Promise.race([promise, timeout(time)])
}
// => promise的三个状态 fulfilled rejected pending
let p = (time2) => new Promise((resolve, reject) => {
    setTimeout(resolve, time2, 'test')
})

console.log('promiseTimeout is', promiseTimeout(p(500), 1000))

// script start 
// async1 start
// async2 
// promise1
// script end 
// async1 end 
// promise2 
// promise3
// setTimeout


let arr = [1, 2, 3]
let obj = {}

function fun(arrTemp, objTemp) {
    // var arrTemp = arr(地址)
    // var objTemp = objTemp(地址)
    arrTemp = [] // 并没有改变地址中的内容 只是把arrTemp变量的指向改变了
    objTemp.a = 1 // 改变了地址中的内容 
    objTemp = { b: 2 } // 改变了objTemp变量的指向
}
fun(arr, obj)
console.log('arr=', arr, 'obj=', obj) // [1,2,3] {a:1}




// 利用双指针去重


// let list = [1, 2, 3, 4, 5, 7, 8, 8, 9, 9, 10]

// function removeDuplicate(list) {
//     let len = arr.length
//     let i = 0
//     let j = 1
//     while (i < len - 1) {
//         let n1 = arr[i]
//         let n2 = arr[j]
//         if (n1 !== n2) {
//         }
//     }
// }