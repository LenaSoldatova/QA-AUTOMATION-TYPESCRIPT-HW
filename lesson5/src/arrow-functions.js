const sumArray = (arr, func) => {
    if (ifArray(arr)) {
        return func(arr);
    } else {
        console.error('Error: Incorrect Array');
    }
};

const sum = (arr) => {
    if (ifArrayNum(arr)) {
        return arr.reduce((sum, current) => sum + current, 0);
    } else {
        return arr.join(', ');
    }
};

const ifArray = (arr) => {
    if (!Array.isArray(arr)) {
        console.error('Error: should be array');
        return false;
    } else {
        return true;
    }
};

const ifArrayNum = (arr) => {
    if (!arr.every(item => typeof item === 'number')) {
        console.error('Error: should be numbers array');
        return false;
    } else {
        return true;
    }
};

const numbersArray = [10, 20, 30, 40, 50];
const stringsArray = ['10', '20', '30', '40', '50'];

console.log('Summ of numbers array:', sumArray(numbersArray, sum));
console.log('Sum of string array:', sumArray(stringsArray, sum));
console.log('Concatenation of array items:', sumArray(stringsArray, sum));
