// function factorial(N) {
//     if (N > 1) {
//         return N * factorial(N - 1)
//     }

//     return N
// }

// console.log(factorial(5))


function factorial(num) {
    if (num <= 1) return 1

    return num * factorial(num - 1)
}

console.log(factorial(5))