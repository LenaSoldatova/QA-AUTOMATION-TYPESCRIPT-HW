export function sumArray(arr, func) {
    if (ifArray(arr)){
        return func(arr);
    } else {
        console.error('Error: Incorrect Array');
    }
}

export function sum(arr){
    if (ifArrayNum(arr)){
        return arr.reduce((sum, current) => sum + current, 0);
    } else {
        return arr.join(', ');
    }

};

export function ifArray(arr) {
    if (!Array.isArray(arr)) {
        console.error('Error: should be array');
        return false;
    } else {
        return true;
    }
}

export function ifArrayNum(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        console.error('Error: should be numers array');
        return false;
    } else {
        return true;
    }
}

const numbersArray = [10, 20, 30, 40, 50];
const stringsArray = ['10', '20', '30', '40', '50'];
console.log('Summ of numbers array:', sumArray(numbersArray, sum));
console.log('Sum of string array:', sumArray(stringsArray, sum));
console.log('Concatination of array items:', sumArray(stringsArray, sum));
