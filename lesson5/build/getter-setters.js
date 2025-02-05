const person = {
    _firstName: "Olena",
    _lastName: "Soldatova",
    _details: {
        _age: 40,
        _city: "Odesa",
        get age() {
            return this._age;
        },
        set age(value) {
            if (typeof value === 'number' && value > 0) {
                this._age = value;
            } else {
                console.error("Error: Age is negative");
            }
        },
        get city() {
            return this._city;
        },
        set city(value) {
            if (typeof value === 'string' && value.length > 0) {
                this._city = value;
            } else {
                console.error("Error: City should be string");
            }
        }
    },
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    set fullName(name) {
        const parts = name.split(" ");
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            console.error("Error: Full Name formate is [[firstName] [lastName]] ");
        }
    },
    incrementAge() {
        this._details.age++;
        return this._details.age;
    }
};
console.log("Full Name:", person.fullName);
person.fullName = "Poltorak Andrii";
console.log("Update Full Name:", person.fullName);
console.log("Current Age:", person._details.age);
person._details.age = 35;
console.log("Update Age:", person._details.age);
console.log("City:", person._details.city);
person._details.city = "Nice";
console.log("Updated City:", person._details.city);
console.log("Updated Age:", person.incrementAge());
