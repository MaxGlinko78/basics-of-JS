"use strict";

const option = {
  name: "test",
  width: 1024,
  hight: 1024,
  colors: {
    border: "black",
    bg: "red",
    color: "orange",
  },
  makeTest: function () {
    console.log("Test");
  },
};

option.makeTest();

console.log(Object.keys(option).length);

/* Деструктуризация обьекта*/
const { border, bg } = option.colors;
console.log(border);

// option.colors.color.push["lime"];
// option.colors.color.push("black");
// console.log(option.colors.color);

// option.user = "Glinko";
// delete option.name;
// console.log(option);

// let counter = 0;

// for (let key in option) {
//   if (typeof option[key] === "object") {
//     for (let i in option[key]) {
//       console.log(`Свойства внутри ${i} имеет значение ${option[key][i]}`);
//     }
//   } else {
//     console.log(`Свойства ${key} имеет значение ${option[key]}`);
//     counter++;
//   }
// }

// console.log(counter);
