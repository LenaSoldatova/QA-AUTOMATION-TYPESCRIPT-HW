const arr = [1, '2', 3, 100];

console.log(arr);

arr.push(4);
console.log(arr);

const filteredArray = arr.filter((el) => typeof el === 'number');
console.log(filteredArray);

const foundElement = arr.find((el) => typeof el === 'number');
console.log(foundElement);

function isString(el) {
    return typeof el === 'string';
}

const filterStrings = arr.filter((el) => isString(el));
console.log(filterStrings);

const sortedArray = arr.sort();
console.log(sortedArray);

const sortedNumberArray = arr.sort((a, b) => a - b);
console.log(sortedNumberArray);

const sortedNumberArray2 = arr.sort((a, b) => b - a);
console.log(sortedNumberArray2);
