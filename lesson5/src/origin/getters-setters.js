export class SameClass {
    #privateName;
    constructor(name) {
        this.#privateName = name;
        this.fullName = this.#privateName + ' Doe';
    }

    get name() {
        return this.#privateName;
    }

    set name(name) {
        if (!name) {
            throw new Error('Name is required');
        } else {
            this.#privateName = name;
        }
    }

    get fullNameGetter() {
        return this.#privateName + ' Doe';
    }

    //#privateFuntion = (a,b) => {};
}

const sameClass = new SameClass('John');
console.log(sameClass.name);
console.log(sameClass.fullName);

sameClass.name = 'Curt';
console.log(sameClass.name);
console.log(sameClass.fullNameGetter);
