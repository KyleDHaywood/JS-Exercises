// Add the multiples of two variable numbers below the limit number
// ex. limit of 10, multiples 3 & 5
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// Sum of 3,6,9,5,10 = 33

function sum(limit, multiple1, multiple2) {
    sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % multiple1 == 0 || i % multiple2 == 0)
            sum += i;
    return sum;
}

console.log(sum(10,3,5))