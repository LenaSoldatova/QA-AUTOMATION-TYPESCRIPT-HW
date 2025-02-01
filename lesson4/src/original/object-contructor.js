function ObjConstructor(name, props) {
    this.name = name;
    this.props = props;
    this.func = function () {
        console.log(this.name);
    };
}

const objConst = new ObjConstructor('Constructor', {subProp: 'nasted prop'});
const objConst2 = new ObjConstructor('Constructor', 1);

console.log(objConst);
console.log(objConst2);

// check conditional object prop/field before doing operation by '?' operator
// this generates error
try {
    console.log(objConst.props.notExistingProp.someSubProp);
} catch (e) {
    console.log('Error:', e.message);
}

// this will not generate an error because of '?' operator and just return 'undefined'
console.log(objConst.props.notExistingProp?.someSubProp);
console.log(objConst.props['some another not existing prop']?.someSubProp);
