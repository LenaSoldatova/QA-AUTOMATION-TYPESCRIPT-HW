function calculateSumArray(arrNum: number[], arrStr: string[]): string {
    if (calculateNumSum(arrNum) && stringArrayConcat(arrStr)) {
        return String(calculateNumSum(arrNum)) + stringArrayConcat(arrStr);
    } else {
        console.error('Error: Incorrect Array');
        return '';
    }
}

function calculateNumSum(arr: number[]): number {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;

}
function stringArrayConcat(arr: string[]): string {
    let total = '';
    for (const str of arr) {
        total += str;
    }
    return total;

}


const numArray: number[] = [10, 20, 30, 40, 50];
const strArray: string[] = ['10', '20', '30', '40', '50'];
const strArray2: string[] =  ['Hello', ' ', 'World', '!'];

console.log('sum of numbers array:', calculateSumArray(numArray, strArray2));
console.log('Sum of string array:', calculateSumArray(numArray, strArray));
console.log('Sum of string array:', stringArrayConcat(strArray2));
console.log('Sum of string array:', calculateNumSum(numArray));
