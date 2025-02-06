import { Person } from './person.js';

const user = new Person('Andrii', 'Poltorak', 30, 'Kyiv');
console.log('Full Name:', user.fullName);
user.fullName = 'Poltorak Andrii';
console.log('Updated Full Name:', user.fullName);
console.log('Current Age:', user._details.age);
console.log('Incremented Age:', user.incrementAge());
