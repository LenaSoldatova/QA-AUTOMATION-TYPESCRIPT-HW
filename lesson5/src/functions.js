export function sumArray(arr) {
    if (ifArray(arr) && ifArrayNum(arr)) {
        return sum(arr);
    } else {
        console.error('Error: Incorrect Array');
    }
}

export function sum(arr){
    if (ifArrayNum(arr)){
        let sum = 0;
        for (const num of numbersArray) {
            sum += num;
        }
        return sum;
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
        console.error('Error: should be numbers array');
        return false;
    } else {
        return true;
    }
}

const numbersArray = [10, 20, 30, 40, 50];

const stringsArray = ['10', '20', '30', '40', '50'];

console.log('sum of numbers array:', sumArray(numbersArray));

console.log('Sum of string array:', sumArray(stringsArray));
