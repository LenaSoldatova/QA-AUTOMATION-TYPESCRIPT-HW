let num1 = 10;
let num2 = 5;
let num3 = 0;

let str1 = "15";
let str2 = "5";
let str3 = "";

let bool1 = true;
let bool2 = false;

num3 = num1 + num2;
console.log(typeof num3);

num3 = num1 - num2;
console.log(typeof num3);

num3 = num1 * num2;
console.log(typeof num3);

num3 = num1 / num2;
console.log(typeof num3);

num3 = num1 % num2;
console.log(typeof num3);

num3 = num1 ** num2;
console.log(typeof num3);


console.log("num1 + str1 is ", typeof (num1 + str1));
console.log("num1 - str1 is ", typeof (num1 - str1));
console.log("num1 * str1 is ", typeof (num1 * str1));
console.log("num1 / str1 is ", typeof (num1 / str1));

str3 = str1 + str2;
console.log("str1 + str2 = "+ str3, typeof str3);
console.log("num1 + bool1 is ", typeof (num1 + bool1));
console.log("bool1 * bool2 is ", typeof (bool1 * bool2));
console.log("str1 + bool1 is ", typeof (str1 + bool1));
num3 = Number(str1) + num1;
console.log("string to number >> Number(str1) + num1 =" + num3, typeof num3);

console.log(typeof 10);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
