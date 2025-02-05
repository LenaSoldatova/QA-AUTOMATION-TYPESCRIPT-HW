function sayHello() {
    console.log('   Hello, World!');
}

function doSomeJob(name, age, job = {role: 'Unemployed'}) {
    sayName(name);
    sayAge(age);
    sayJob(job);
}

function doSomeJobWithUndefined(name, age, job) {
    sayName(name);
    sayAge(age);
    sayJob(job);
}

export function sayName(name) {
    console.log('   Hello ' + name);
}

export function sayAge(age) {
    console.log('   You are ' + age + ' years old');
}

export function sayJob(job) {
    let jobInternal;
    if (!job) {
        jobInternal = {role: 'Unemployed'};
    } else {
        jobInternal = job;
    }

    console.log('   You are a ', jobInternal);
}


sayHello();
doSomeJob('John', 25, {role: 'Developer', seniority: 'Middle'});
console.log('-----------------------------------');
doSomeJob('Curt', 65);
doSomeJobWithUndefined('Curt', 70);
