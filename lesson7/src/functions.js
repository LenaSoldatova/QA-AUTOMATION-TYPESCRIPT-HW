"use strict";
function calculateSumArray(arr) {
    if (checkifArray(arr) && checkifArrayNum(arr)) {
        return calculateSum(arr);
    }
    else {
        console.error('Error: Incorrect Array');
    }
}
function calculateSum(arr) {
    if (checkifArrayNum(arr)) {
        let total = 0;
        for (const num of arr) {
            total += num;
        }
        return total;
    }
    else {
        return NaN;
    }
}
function checkifArray(arr) {
    if (!Array.isArray(arr)) {
        console.error('Error: should be array');
        return false;
    }
    else {
        return true;
    }
}
function checkifArrayNum(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        console.error('Error: should be numbers array');
        return false;
    }
    else {
        return true;
    }
}
const numArray = [10, 20, 30, 40, 50];
const strArray = ['10', '20', '30', '40', '50'];
console.log('sum of numbers array:', calculateSumArray(numArray));
console.log('Sum of string array:', calculateSumArray(strArray));
console.log('Sum of string array:', checkifArray(numArray));
console.log('Sum of string array:', checkifArrayNum(strArray));
