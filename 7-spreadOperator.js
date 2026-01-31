const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2]; // [1, 2, 3, 4, 5, 6]

console.log(a3)

const a4 = [0, ...a1, 4]; // [0, 1, 2, 3, 0]

const carNames = {name: 'Gol'}
const carBrands = {brand: 'VW'}
const otherInfos = {km: 10000, prince: 49000}

const car = {
    ...carNames, ...carBrands, ...otherInfos
}

console.log(car) // { name: 'Gol', brand: 'VW', km: 10000, prince: 49000 }