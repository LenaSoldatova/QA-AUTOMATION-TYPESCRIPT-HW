const doSomeJob = function(name, age, job) {
    sayName(name);
    sayAge(age);
    sayJob(job);
};

const sayName = function(name) {
    console.log('   Hello ' + name);
};

const sayAge = function(age) {
    console.log('   You are ' + age + ' years old');
};

const sayJob = function(job) {
    let jobInternal;
    if (!job) {
        jobInternal = {role: 'Unemployed'};
    } else {
        jobInternal = job;
    }

    console.log('   You are a ', jobInternal);
};

doSomeJob('John', 25, {role: 'Developer', seniority: 'Middle'});
console.log('-----------------------------------');
