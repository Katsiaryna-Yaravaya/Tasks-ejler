// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?
// НАИБОЛЬШИЙ ПРОСТОЙ ДЕЛИТЕЛЬ

const showPrimeFactor = (num) => {
    let primeFactor = [];

    for (let iterator = 1; iterator <= Math.sqrt(num); iterator++){
        if (num % iterator === 0) {
            primeFactor.push(iterator);
            if (num/iterator !== iterator){
                primeFactor.push(num/iterator)
            }
        }
    }
    return primeFactor;
}

let isPrime = num => showPrimeFactor(num).length === 2

let largestPrimeFactor = (num) => {
    let factors = showPrimeFactor(num);
    let greatestPrimeFactor = 1;
    factors.map((factor) => {
        if (factor > greatestPrimeFactor && isPrime(factor)) {
            greatestPrimeFactor = factor
        }
    })

    return greatestPrimeFactor;
}

console.log(largestPrimeFactor(600851475143));
// 6857