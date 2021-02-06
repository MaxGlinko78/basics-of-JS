"use strict";

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj;

// copy.a=10;

// console.log(copy);
// console.log(obg);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };
// const NewNumbers = copy(numbers);

// NewNumbers.a = 10;

// console.log(NewNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "askdj";

// console.log(newArray);
// console.log(oldArray);

// const video = ["youtube", "video", "rutube"];
// const blogs = ["wordpres", "livejurnal", "blogger"];
// const internet = [...video, ...blogs, "vk", "Fb"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
  one: 1,
  two: 2,
};

const NewObj = { ...q };

console.log(q);
