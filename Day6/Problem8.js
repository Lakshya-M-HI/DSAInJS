function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}


function Twin_primes(num1, num2) {
    if (Math.abs(num1 - num2) === 2 && isPrime(num1) && isPrime(num2)) return true
    return false
}

console.log(Twin_primes(3, 5))