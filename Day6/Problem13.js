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

function first_N_prime_fabonacci_Numbers(num) {
    let a = 1
    let b = 1

    let arr = []

    for (let i = 1; i <= num;) {
        let c = a + b
        if (isPrime(c)) {
            arr.push(c)
            i++
        }
        a = b
        b = c
    }
    return arr.toString()
}

console.log(first_N_prime_fabonacci_Numbers(5))

console.timeEnd()