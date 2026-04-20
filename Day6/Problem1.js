// Approach 1

function isPrime(num) {
    let factorsCount = 0
    for (let i = 0; i * i <= num; i++) {
        if (num % i === 0) {
            factorsCount++
            if (i !== num / i) factorsCount++
        }
    }

    return factorsCount === 2
}



// Approach 2

// function isPrime(num) {

//     if (num <= 1) return false
//     if (num === 2) return true
//     if (num % 2 === 0) return false

//     for (let i = 3; i * i <= num; i += 2) {
//         if (num % i === 0) return false
//     }
//     return true
// }

console.log(isPrime(7))