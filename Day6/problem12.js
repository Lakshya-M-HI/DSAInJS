function isfabonacci(num) {

    if (num < 0) return false
    if (num <= 1) return true

    let a = 0
    let b = 1

    while (a + b <= num) {
        let c = a + b
        if (c === num) return true
        a = b
        b = c
    }

    return false

}

function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}

function sum_of_two_fabonacci_isprime(num1, num2) {

    return isfabonacci(num1) && isfabonacci(num2) && isPrime(num1 + num2) ? true : false
}

console.log(sum_of_two_fabonacci_isprime(5, 8))