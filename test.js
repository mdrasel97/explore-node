const { a: x } = require("./file1.js");
// const { a } = require("./file2.js");
// console.log(x);
// const { add } = require("./add");
// const { subs } = require("./subs");
const { add, subs } = require("./node");
console.log(add(2, 4));
console.log(subs(2, 4));
