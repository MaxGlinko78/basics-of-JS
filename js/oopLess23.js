"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strObj);

console.dir([1, 2, 3, 4]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("hello");
  },
};

const john = Object.create(soldier); // Создает обьект со свойствами прототипа

// john.__proto__ = soldier; обозначение наследлвания прототипа обьекту утарая версия

Object.setPrototypeOf(john, soldier); // Создает Обьект с прототипом (оьбект, прототип)

console.log(john.armor);

john.sayHello();
