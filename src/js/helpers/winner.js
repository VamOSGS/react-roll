export function getNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export function getWinner(arr) {
    const numbers = arr;
    return Math.random() > 0.14 ? numbers[getNum(1, 14) - 1] : numbers[0];
}
