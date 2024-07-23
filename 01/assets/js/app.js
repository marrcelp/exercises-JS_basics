const a = '4.2';
const b = 9;
const parsedA = parseInt(a);

const sum = parsedA + b;
const substraction = parsedA - b;
const divided = parsedA / b;
const multiply = parsedA * b;


function greaterThan20 (action) {
    console.log(action > 20 ? 'Wynik podanej operacji jest wiekszy niz 20' : 'Wynik podanej operacji jest mniejszy niz 20');
}

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

console.log(sum);
console.log(substraction);
console.log(divided);
console.log(multiply);

greaterThan20(sum);
greaterThan20(multiply);
greaterThan20(substraction);