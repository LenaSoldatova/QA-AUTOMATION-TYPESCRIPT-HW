const arr = [1, '2', 3, 100];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const el of arr) {
    console.log(el);
}

for (const el in arr) {
    console.log(el);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

let j = 0;
do {
    console.log(arr[j]);
    j++;
}
while (j < arr.length);
