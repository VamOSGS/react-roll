export function getNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export function getWinner(arr) {
    const numbers = arr;
    const zero = numbers[6];
    const normal = Math.random() > 0.5 ? numbers[getNum(1, 6) - 1] : numbers[getNum(7, 14) - 1];
    return Math.random() > 0.015 ? normal : zero;
}
