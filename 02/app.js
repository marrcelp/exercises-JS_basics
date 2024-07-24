
/* rozwiązanie z pętlą for */

// const x = prompt('Podaj liczbę z zakresu 1-9:');
//
// if (x < 1 || x > 9) {
//     console.log('Podana liczba nie mieśći się w zakresie!');
//
// } else {
//     console.log(`Analizowana liczba to ${x}`);
//
//     for (let i = 1; i < 10; i++) {
//         const multiply = x * i;
//         console.log(`${x} x ${i} = ${multiply}`);
//     }
// }




/* rozwiązanie z pętlą while  */

const y = prompt('Podaj liczbę z zakresu 1-9:');
const z = prompt('Podaj jej wykładnik');
let number = 1
let result = 1;


if (y < 1 || z > 9) {
    console.log('Podana liczba nie mieśći się w zakresie!');

} else if (z === 0){
    console.log(`${y}^0 = 1`);

} else {
    while (number <= z) {
        result *= y;
        number++;
    }
    console.log(`${y}^${z} = ${result}`);
}

