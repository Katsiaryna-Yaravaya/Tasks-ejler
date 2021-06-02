function printFibonacci(iterationNumber, firstNumber = 0, secondNumber = 1) {
    let sumOfEvenFibNumber = 0;
    let fibNumber = firstNumber + secondNumber;

    if (iterationNumber !== 0) {
        sumOfEvenFibNumber = printFibonacci(--iterationNumber, fibNumber, firstNumber);
        if (fibNumber % 2 === 0) {
            return sumOfEvenFibNumber + fibNumber
        }
        return sumOfEvenFibNumber
    }
    return 0
}

// const a = printFibonacci(10)
// console.log(a)

////////////////////////////////////////////////////

let showSumFibonacci = (num) => {
    let firstNumber = 0
    let secondNumber = 1
    let sumOfEvenFibNumber = 0;

    for (let iterator = 1; iterator <= num; iterator++) {

        let fibNumber = firstNumber + secondNumber
        firstNumber = secondNumber;
        secondNumber = fibNumber
        if ((iterator+1) % 3 === 0) {
            sumOfEvenFibNumber += fibNumber
        }
    }
    return sumOfEvenFibNumber
}

let k = showSumFibonacci(4000000)
console.log(k)

/////////////////////////////////////////////////////////////////////

/*let iterator = 0;
let firstNumber = 0
let secondNumber = 1
let sumOfEvenFibNumber = 0;

while (iterator <= 4000000) {
    let fibNumber = firstNumber + secondNumber
    firstNumber = secondNumber;
    secondNumber = fibNumber
    if (fibNumber % 2 === 0 ) {
        sumOfEvenFibNumber += fibNumber
    }
    iterator++;
}

console.log(sumOfEvenFibNumber)*/

/////////////////////////////////////////////////////////////////////
/*
let iterator = 1;
let firstNumber = 0
let secondNumber = 1
let sumOfEvenFibNumber = 0;
let fibNumber = 0;

do {
    fibNumber = firstNumber + secondNumber
    firstNumber = secondNumber;
    secondNumber = fibNumber
    if ((iterator+1) % 3 === 0) {
        sumOfEvenFibNumber += fibNumber
    }
    iterator++;
} while (iterator <= 10);
console.log(sumOfEvenFibNumber)*/

/////////////////////////////////////////////////////////////////////

