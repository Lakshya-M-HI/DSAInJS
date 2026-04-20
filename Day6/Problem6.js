function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}

function Prime_numbers_upto_N(num) {

    if (num <= 1) return false
    if (num === 2) return num
    let arr = [2]
    for (let i = 3; i <= num; i += 2) {
        isPrime(i) ? arr.push(i) : ''
    }
    return arr.toString()
}

console.log(Prime_numbers_upto_N(20))