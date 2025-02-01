const obj1 = {
    name: 'Joe',
    surname: 'Black',
    props: {
        age: 33,
        gender: 'male',
        'country of origin': 'USA'
    }
};

const obj2 = Object.assign({}, obj1);
const obj3 = {...obj1};

console.log(obj2);

obj2.name = 'John';
obj2.props.age = 44;
obj3.name = 'John2';
obj3.props.age = 55;
console.log(obj2, obj1);
console.log('----------\n');
console.log(obj3, obj1);

const obj4 = structuredClone(obj1);
obj4.name = 'John4';
obj4.props.age = 22;

console.log('----------\n');
console.log(obj4, obj1);

const obj5 = JSON.parse(JSON.stringify(obj1));
obj5.name = 'John5';
obj5.props.age = 32;
console.log('----------\n');
console.log(obj5, obj1);

console.log(obj1 === obj2);
console.log(obj1.props === obj2.props);

console.log(typeof obj1, typeof obj5.name);
