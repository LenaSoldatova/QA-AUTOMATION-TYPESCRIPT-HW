function calculate_SumArray(arrNum: number[], arrStr: string[]): string {
    const numSum = calculateNumSum(arrNum);
    const strConcat = stringArrayConcat(arrStr);
    return `${numSum}${strConcat}`;
}

function calculate_NumSum(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}

function stringArray_Concat(arr: string[]): string {
    return arr.join('');
}

const num_Array: number[] = [10, 20, 30, 40, 50];
const str_Array: string[] = ['10', '20', '30', '40', '50'];
const str_Array2: string[] = ['Hello', ' ', 'World', '!'];

console.log('sum of numbers array:', calculate_SumArray(num_Array, str_Array2));
console.log('Sum of string array:', calculate_SumArray(num_Array, str_Array));
console.log('String concatenation:', stringArray_Concat(str_Array2));
console.log('Sum of numbers:', calculate_NumSum(num_Array));
