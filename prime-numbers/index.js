function showPrimes(limit) {
    for (let currentNumber = 2; currentNumber <= limit; currentNumber++) {
        if (isPrime(currentNumber)) {
            console.log(currentNumber)
            }
        }
    }

function isPrime(number) {
    for (let i = 2; i < number; i++)
        if (number % i == 0)
            return false;
    return true;
}

showPrimes(13);