let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive a car.");
} else if (age >= 18 && !hasLicense) {
    console.log("You have reached the age of majority, but you do not have a driver's license.");
} else {
    console.log("You are too young to drive.");
}

let number = 15;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let weather = "rainy";
if (weather === "sunny") {
    console.log("It's sunny today, you can go for a walk!");
} else if (weather === "rainy") {
    console.log("It's raining today, take an umbrella.");
} else {
    console.log("The weather is unknown, dress according to the situation.");
}
