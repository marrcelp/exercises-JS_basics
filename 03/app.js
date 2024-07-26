const min = 1;
const max = 100;

const a = parseInt(randomNumber(min, max));
const b = parseInt(randomNumber(min, max));
const c = parseInt(randomNumber(min, max));

console.log(a, b, c);

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

function getSum(a, b, c) {
    let sum;

    if (a > b && b > c) {
        sum = a + b;
        console.log(sum);
        return sum;

    } else if (a > b && b < c) {
        sum = a + c;
        console.log(sum);
        return sum;

    } else  {
        sum = b + c;
        console.log(sum);
        return sum;
    }

}

getSum(a, b, c);