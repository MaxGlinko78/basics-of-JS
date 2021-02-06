"use strict";

const arr = [15, 52, 3, 45, 11, 62, 72, 83, 39];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr.pop();
// arr.push(12);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// item, i, arr(название элемента номер по порядку перебираемый массив)
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr} `);
// });

// const str = prompt("", "");
// const products = str.split(",");
// products.sort();
// console.log(products.join(";"));
