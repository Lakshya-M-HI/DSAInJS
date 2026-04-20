function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}


function Distinct_Prime_factors(num) {

    if (!num) return false
    if (num === 2) return num

    let arr = []

    for (let i = 2; i ** 2 <= num; i++) {
        if (num % i === 0 && isPrime(i) && isPrime(num / i)) {
            i !== num / i ?
                arr.push(i, num / i) : arr.push(i)
            break
        } else if (num % i === 0 && isPrime(i)) {
            arr.push(i)
        }
    }

    return arr.length >= 1 ? 'Distinct prime factors: ' + arr.toString() : false
}

console.log(Distinct_Prime_factors(100))