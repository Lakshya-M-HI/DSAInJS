
// Approach 1

// function Nth_fabonacci(num) {
//     const nth = (1.618) ** num / 2.236
//     return Math.round(nth)
// }

// console.log(Nth_fabonacci(8))



// Approach 2

function fibonacci(num) {

    if (BigInt(num) <= 1) return num

    let a = 0
    let b = 1
    let c

    for (let i = 2; i < BigInt(num); i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}

console.log(fibonacci(8))