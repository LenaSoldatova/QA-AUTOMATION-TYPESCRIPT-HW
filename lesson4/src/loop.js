let numbers = [];
let max = 100;

for (let i = 0; i < max; i++) {
    numbers.push(i);
}

for (const num of numbers) {    
    console.log(num);
  }

let i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

let j = 0;
do {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
} while (j < 100);


numbers = [];
for (let i = 100; i >= 0; i -= 10) {
    numbers.push(i);
}

for (const num of numbers) {
    console.log(num);
  }

i = 100;
while (i >= 0) {
  console.log(i);
  i -= 10;
}

j = 100;
do {
  console.log(j);
  j -= 10;
} while (j >= 0);