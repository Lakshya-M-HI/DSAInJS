console.time()

function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}

function sum_of_N_prime(num) {

    if (num <= 1) return false
    if (num === 2) return num
    let sum = 2
    for (let i = 3; i <= num; i += 2) {
        isPrime(i) ? sum += i : ''
    }
    return sum
}

console.log(sum_of_N_prime(10))
 console.timeEnd()