import { SameClass } from './getters-setters.js';
import { sayAge } from './traditional-function.js';

const sameClass = new SameClass('John');
console.log(sameClass.name);
console.log(sameClass.fullName);

sameClass.name = 'Curt';
console.log(sameClass.name);
console.log(sameClass.fullNameGetter);

sayAge(25);
