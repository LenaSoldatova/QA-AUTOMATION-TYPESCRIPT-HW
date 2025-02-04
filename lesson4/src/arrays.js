const stringArray = ["apple", "banana", "cherry"];
stringArray.forEach(item => console.log(item));
const upperCaseStrings = stringArray.map(item => item.toUpperCase());
console.log(upperCaseStrings);

let i = 0;
while (i < upperCaseStrings.length) {
    console.log(upperCaseStrings[i]);
    i++;
}

const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);
numberArray.forEach(num => console.log(num * 2));

const evenNumbers = [];
let j = 0;
do {
    if (numberArray[j] % 2 === 0) {
        evenNumbers.push(numberArray[j]);
    }
    j++;
} while (j < numberArray.length);

const booleanArray = [true, false, true, false];
booleanArray.forEach(bool => console.log(bool ? "Yes" : "No"));
const invertedBooleans = booleanArray.map(bool => !bool);
console.log(invertedBooleans);

const anyArray = ["hello", 42, true];
anyArray.forEach(item => console.log(typeof item));
const stringifiedArray = anyArray.map(item => String(item));
console.log(stringifiedArray);

const commonArray = [...stringArray, ...numberArray, ...booleanArray, ...anyArray];

for (const item in commonArray) {
    console.log(item );
}

const newNumArray = filterByType(commonArray, 'number').sort((a, b) => b - a);
console.log(newNumArray);
console.log(filterByType(commonArray, 'string'));
console.log(filterByType(commonArray, 'boolean'));

function filterByType(arr, type) {
    return arr.filter((el) => typeof el === type).sort();
}
