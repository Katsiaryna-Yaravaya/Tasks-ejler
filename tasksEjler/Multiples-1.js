function sumOfMultiples(...numbersData) {
    const [maxIterator, numberOne, numberTwo] = numbersData
    let multiples = []

    for (let iterator = 0; iterator < maxIterator; iterator++) {
        if (iterator % numberOne === 0 || iterator % numberTwo === 0) {
            multiples.push(iterator)
        }
    }
    return multiples.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log(sumOfMultiples (1000, 5, 3))
