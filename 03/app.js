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

    } else if (a > b && b < c) {
        sum = a + c;

    } else  {
        sum = b + c;
    }
    console.log(`Suma 2 największych wylosowanych liczb wynosi: ${sum}`);
    return sum;
}

const isEven = (number) => {

    if (typeof number !== 'number') {
        console.log('To nie jest liczba!')
        return null;

    } else {
        return number % 2 == 0 ? true : false;
    }
}

function showInfo(number, val) {
    switch(val) {
        case null:
            console.log(`Podany argument ${number} nie jest liczba`)
            break;

        case true:
            console.log(`Podany argument ${number} jest parzysty`)
            break;

        case false:
            console.log(`Podany argument ${number} jest nieparzysty`)
            break;
    }
}

const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);