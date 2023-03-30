// console.log(true == 1);
// console.log(true === 1);
// console.log(typeof 1);
// console.log(typeof true);

// console.log(true != false);
// console.log(true !== false);
// console.log(1 != 0);
// console.log(1 !== 0);

// console.log(1 !== "0");
// console.log(1 !== "0" || !false); // true
// console.log(1 !== "0" || (false && "hey")); // true
// console.log(1 !== "0" || (true && "hey")); // false
// console.log(1 !== "0" && false && "hey"); // true
// console.log(1 !== "0" && true && "hey"); // false
// console.log(!(1 !== "0" && true && "hey")); // false

// 3-dars | If else | Nullish

// let age = prompt("Yoshingizni kiriting");
// if (age > 18) {
//   console.log("Elektron pochta ocha olasiz");
// } else {
//   console.log("Elektron pochta ocha olmaysiz");
// }

// let temp = 1;
// 0, null, undefined
// if (temp) {
//   console.log("Havo issiq");
// }
// if (true) {
//   console.log("Havo soviq");
// }

// let temp = "qor"; // issiq, sovuq, yomg`ir, qor
// 0, null, undefined

// if (temp === "issiq") {
//   console.log("Hovo issiq, yengil kiyinib oling");
// } else if (temp === "sovuq") {
//   console.log("Hovo soviq, qalin kiyinib oling");
// } else if (temp === "yomg`ir") {
//   console.log("Hovo yomg`ir, soyabon olib oling");
// } else if (temp === "qor") {
//   console.log("Hovo qor, qalin kiyining soyabon olib oling");
// } else console.log("nomalum obxavo");

// temp = 0; // temp >0 && temp<10, temp>10 && temp<15,  temp > 15 && temp < 25
// if (temp < 0) {
//   console.log("Havo juda sovuq ");
// } else if (temp <= 25 && temp > 15) {
//   console.log("Havo  juda issiq ");
// } else if (temp <= 15 && temp > 10) {
//   console.log("Havo issiq");
// } else if (temp <= 10 && temp > 0) {
//   console.log("Havo sovuq");
// } else {
//   console.log("not found");
// }

// if ("condition") {
//   ("code");
// } else if ("condition") {
//   ("code");
// } else "code";

// ? :
temp = -5;
// temp < 0 ? ===> if(temp < 0)
// temp < 0 ? console.log("Xavo juda sovuq") : console.log("nod found");

// temp <= 10 && temp > 0
//   ? console.log("havo juda sovuq")
//   : console.log("not found");

// temp < 0
//   ? console.log("havo juda sovuq")
//   : temp < 10
//   ? console.log("havo sovuq")
//   : temp < 15
//   ? console.log("havo issiq")
//   : console.log("havo juda issiq");

// Nullish ?? =====> null, undefined
// OR || =====> null, undefined, 0, false, NaN

// console.log(false || 1);
// console.log(false ?? 1);

// console.log(NaN || 1);
// console.log(NaN ?? 1);

// console.log(null || 1);
// console.log(null ?? 1);

// console.log(undefined || 1);
// console.log(undefined ?? 1);

console.log(2 * 2); // 2**2
console.log(2 * 2 * 2); // 2**3
console.log(2 * 2 * 2 * 2); // 2**4
console.log(2 * 2 * 2 * 2 * 2); // 2**5

console.log(2 ** 50); // 2**50
