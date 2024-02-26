// Random numbers between 1 and 6 for two dice
function generateRandomNumber() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return [die1, die2];
}

// Function to generate random numbers
const [die1, die2] = generateRandomNumber();

// Total
const total = die1 + die2;

// Show numbers and the total
console.log("Die 1:", die1);
console.log("Die 2:", die2);
console.log("Sum:", total);

// Conditions to display Rules 
if (total === 7 || total === 11) {
    console.log("CRAPS – you lose!");
} else if (die1 === die2 && die1 % 2 === 0) {
    console.log("You won!");
} else {
    console.log("You pushed!");
}
