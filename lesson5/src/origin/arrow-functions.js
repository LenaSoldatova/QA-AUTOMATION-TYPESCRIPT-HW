const doSomeJob = (name, age, job) => {
    sayName(name);
    sayAge(age);
    sayJob(job);
};

const sayName = (name) => {
    console.log('   Hello ' + name);
};

const sayAge = (age) => {
    console.log('   You are ' + age + ' years old');
};

const sayJob = (job) => {
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
