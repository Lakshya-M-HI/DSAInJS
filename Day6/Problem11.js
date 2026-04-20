function sum_of_even_fabonacci_upto_N(num) {
    let a = 0
    let b = 1

    let sum = 0

    for (let i = 3; i <= num; i++) {
        let c = a + b
        c % 2 === 0 ? sum += c : ''
        a = b
        b = c
    }
    return sum
}

console.log(sum_of_even_fabonacci_upto_N(10))