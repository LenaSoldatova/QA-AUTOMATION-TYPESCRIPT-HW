const num = 10;
const str = "10";
const boolTrue = true;
let boolFalse = false;
let nullValue = null;
let undefinedValue;

console.log("num == 10: ", num == 10);
console.log("num === str: ", num === str);
console.log("num != 5: ", num != 5);
console.log("num !== str: ", num !== str);
console.log("num > 5: ", num > 5);
console.log("num < 20: ", num < 20);
console.log("num >= 10: ", num >= 10);
console.log("num <= 5: ", num <= 5);

console.log("AND (&&): ", boolTrue && boolFalse);
console.log("OR (||): ", boolTrue || boolFalse);
console.log("NOT (!): ", !boolTrue);

console.log("num AND str: ", num && str);
console.log("num OR str: ", num || str);
console.log("NOT: ", !num);
console.log("NOT str: ", !str);

console.log("nullValue == undefinedValue: ", nullValue == undefinedValue);
console.log("nullValue === undefinedValue: ", nullValue === undefinedValue);

console.log('10 == "10" is ', 10 == "10");
console.log('true == 1 is ', true == num);
console.log('nullValue == undefinedValue is ', nullValue == undefinedValue);
console.log('10 === "10" is ', 10 === "10");
console.log('true === 1 is ', true === num);
console.log('nullValue === undefinedValue is ', nullValue === undefinedValue);
