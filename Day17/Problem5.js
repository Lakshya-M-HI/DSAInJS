// function power(n, p) {

//     if (p > 1) n *= power(n, p - 1)

//     return n
// }

// console.log(power(2, 5))


function power(n, p) {

    if (p === 0) return 1
    return n * power(n, p - 1)
}

console.log(power(2, 5))