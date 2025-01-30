let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("It's sunny today, you can go for a walk!");
        break;
    case "rainy":
        console.log("It's raining today, take an umbrella.");
        break;
    default:
        console.log("Weather is unknown, dress appropriately.");
}


let hasLicense = -1;

switch (hasLicense) {
    case (1):
        console.log("You can drive a car.");
        break;
    case (0):
        console.log("You are of legal age, but you don't have a driver's license.");
        break;
    default:
        console.log("You are too young to drive.");
}

let number = 15;
switch (number % 2) {
    case 0:
        console.log("The number is even.");
        break;
    default:
        console.log("The number is odd.");
}
