const set = new Set();
set.add(1);
set.add(2);
set.add('N');
set.add('N');
console.log(set);

const map = new Map();
map.set('name', 'John');
map.set('surname', 'Doe');
map.set('surname', 'Black');
if(!map.has('prop')) {
    map.set('prop', 'John');
}
console.log(map);
