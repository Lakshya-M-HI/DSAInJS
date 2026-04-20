
function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}


// Approach 1

// It is little optmised

function Prime_factors(num) {
    let arr = []
    let original = num

    for (let i = 2; i ** 2 <= original; i++) {

        if (num % i === 0 && isPrime(i) && isPrime(num / i)) {
            arr.push(i, num / i)
            return arr

        } else if (num % i === 0 && isPrime(i)) {
            num = num / i
            arr.push(i)
            i--
        }
    }

    return arr

}

console.log(Prime_factors(84))



// Approach 2

// function Prime_factors(num) {
//     let arr = []
//     let newarr = []

//     for (let i = 2; i ** 2 <= num; i++) {
//         if (num % i === 0 && isPrime(i) && isPrime(num / i)) {
//             arr.push(i, num / i)
//         } else if (num % i === 0 && isPrime(i)) {
//             arr.push(i)
//         }
//     }

//     if (arr.length <= 0) return false

//     for (let i = 0; i < arr.length; i++) {

//         if (num % arr[i] === 0) {
//             num = num / arr[i]
//             newarr.push(arr[i])
//             i--
//         }
//     }

//     return newarr

// }

// console.log(Prime_factors(84))