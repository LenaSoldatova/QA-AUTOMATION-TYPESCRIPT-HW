"use strict";
function sumArrayNew(arr) {
    try {
        if (!ifArrayNew(arr) || !ifArrayNumNew(arr)) {
            throw new Error('Incorrect Array');
        }
        return sumNew(arr);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('An unknown error occurred');
        }
    }
}
function sumNew(arr) {
    try {
        if (!ifArrayNumNew(arr)) {
            throw new Error('Array should contain only numbers');
        }
        let total = 0;
        for (const num of arr) {
            total += num;
        }
        return total;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('An unknown error occurred');
        }
        return NaN;
    }
}
function ifArrayNew(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Value should be an array');
    }
    return true;
}
function ifArrayNumNew(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        throw new Error('Array should contain only numbers');
    }
    return true;
}
const numbersArrayNew = [10, 20, 30, 40, 50];
const stringsArrayNew = ['10', '20', '30', '40', '50'];
console.log('sum of numbers array:', sumNew(numbersArrayNew));
console.log('sum of numbers array:', sumArrayNew(numbersArrayNew));
console.log('Sum of string array:', sumArrayNew(stringsArrayNew));
console.log('sum of numbers array:', ifArrayNew(numbersArrayNew));
console.log('Sum of string array:', ifArrayNumNew(stringsArrayNew));
