const arr = [];
function createArray(min, max) {

    for (let i = 0; i < 20; i++) {
        const randomNumber = parseInt(Math.random() * (max-min) + min);
        arr.push(randomNumber);
    }
    console.log(arr);
}

createArray(0, 100);

function sortArray(arr) {
    const sortedArray = arr.sort((a, b) => b - a).slice(0, 10);
    console.log(`Posortowana tablica z 10 elementami wygląda następująco: ${sortedArray}`);
    return sortedArray;
}

sortArray(arr);