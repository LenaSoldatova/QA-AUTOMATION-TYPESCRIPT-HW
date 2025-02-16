function calculate_SumArray(arrNum: number[], arrStr: string[]): string {
    try {
        const numSum = calculate_NumSum(arrNum);
        const strConcat = stringArray_Concat(arrStr);

        return String(numSum) + strConcat;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Unknown error occurred');
        }
        return '';
    }
}

function calculate_NumSum(arr: number[]): number {
    try {
        let total = 0;
        for (const num of arr) {
            if (typeof num !== 'number') throw new Error('Invalid number in array');
            total += num;
        }
        return total;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return NaN;
    }
}

function stringArray_Concat(arr: string[]): string {
    try {
        let total = '';
        for (const str of arr) {
            if (typeof str !== 'string') throw new Error('Invalid string in array');
            total += str;
        }
        return total;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return '';
    }
}

const num_Array: number[] = [10, 20, 30, 40, 50];
const str_Array: string[] = ['10', '20', '30', '40', '50'];
const str_Array2: string[] = ['Hello', ' ', 'World', '!'];

console.log('sum of numbers array:', calculate_SumArray(num_Array, str_Array2));
console.log('Sum of string array:', calculate_SumArray(num_Array, str_Array));
console.log('Sum of string array:', stringArray_Concat(str_Array2));
console.log('Sum of string array:', calculate_NumSum(num_Array));
