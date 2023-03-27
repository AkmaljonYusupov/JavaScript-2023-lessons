// "use strict";
// console.log("hello javascript 1");
// console.log("hello javascript 2");

// let var const => verabels ni belgilash uchun ishlatiladi
// const => o`zgarmas
// var => Global
// let => scopka tegishli {} Modern way

// const text = 24;
// console.log(text);

// text = `Web Brain academy`;
// console.log(text);

// let num = 1,
//   a = 2,
//   b = 3;

// let a = (b = c = 3);
// console.log(a, b, c);
// console.log(`1234`);

// data type 8 ta

// -- primitive

// 1.Number
// console.log(9007199254740992);

// 2.Bigint
// console.log(9007199254740992n + 1n);

// 3.String
// let name = "Smart Brain IT Academy";
// console.log('Welcome \nto "Smartbrain"' + name + "IT Center");
// console.log(typeof `Welcom ${name}, IT Center`);

// 4.Boolean
// console.log(true);
// console.log(false);

// 5.Nul
// let b = null;
// console.log(b);

// 6.Undefined
// let a;
// let b = null;
// console.log(typeof a, typeof b);
// console.log(isNaN(null + 1));
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(b === b); // true
// console.log({ b } === { b }); // false

// null vs undefined --> larning bur biridan farqi
// -- value exist vs value not exist
// -- object vs undefined
// -- primitieve value vs ECMA feature
null == undefined; // true
null === undefined; // false
isNaN(2 + null); // false
isNaN(2 + undefined); // true

// 7.Symbols
// let a = Symbol("text");
// let b = Symbol("text");
// console.log(b === a);
// console.log(b == a);

// --non - primitieve;

// Object => array, obj, function
let arr = ["Anvar", 24, "Olim"]; // bu ma`lumotlarni indexsi bilan chaqiradi
let obj = { name: "SmartBrain", status: "IT center" }; // key orqali ifoda qilinadi
// let function = () =>{}
function test() {
  console.log(arr);
  console.log(obj.name);
}
test();
console.log(arr);
console.log(obj.name);

// 9007199254740992
// JavaScript da 8 ta data types mavjud. ulardan 7 tasi primitive 1 tasi non-primitive.
// -- primitive
// 1.Number => raqamlar, in range of = 9007199254740992 eng katta raqam
// 2.Bigint => 9007199254740992n "n" is bigint
// console.log(9007199254740992n + 1n);
// 3.string => a
// 4.Boolean => a
// 5.Null => a
// 6.Undefined => a
// 7.Symbols =>a
// -- non-primitieve
// 8.Objects => a

// typeof => malumotlar turini aniqlash uchun ishlatiladi
