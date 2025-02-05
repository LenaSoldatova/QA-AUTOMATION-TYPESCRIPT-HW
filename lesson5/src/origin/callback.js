function doSomeJob(name, age, jobCallback) {
    sayName(name);
    sayAge(age);
    jobCallback();
}

function sayName(name) {
    console.log('   Hello ' + name);
}

function sayAge(age) {
    console.log('   You are ' + age + ' years old');
}

function sayJob(job) {
    let jobInternal;
    if (!job) {
        jobInternal = {role: 'Unemployed'};
    } else {
        jobInternal = job;
    }

    console.log('   You are a ', jobInternal);
}

const sayJobExpression = function(job) {
    let jobInternal;
    if (!job) {
        jobInternal = {role: 'Unemployed'};
    } else {
        jobInternal = job;
    }

    console.log('   You are a ', jobInternal);
};

doSomeJob('John', 25, () => sayJob({role: 'Developer', seniority: 'Middle'}));

console.log('-----------------------------------');

doSomeJob('John', 25, () => sayJobExpression({role: 'Developer', seniority: 'Middle'}));

console.log('-----------------------------------');

doSomeJob('John', 25, () => console.log('You are a Developer'));
