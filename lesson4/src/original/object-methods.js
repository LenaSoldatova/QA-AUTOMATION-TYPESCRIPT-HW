const obj = {
    name: 'Test',
    surname: 'Test2',
    func: function () {
        console.log(this.surname);
    },
    funcTwo(name) {
        console.log('this.param = ' + this.name);
        console.log('param without this = ' + name);
        this.name = name;

        this.func();
    },
    nasted: {
        prop: 'value',
        funNasted() {
            console.log(this.prop);
        }
    }
};

console.log(obj.name);
obj.func();
obj.funcTwo('Test3');
console.log(obj.name);
console.log(obj.nasted.funNasted());
