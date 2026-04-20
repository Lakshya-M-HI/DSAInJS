function generate_fabonacci_upto_N(limit1, limit2) {

    if (limit1 > limit2) return false

    if (limit1 <= 0 && limit2 <= 0) return limit2

    let a = 0
    let b = 1
    let arr = []

    limit1 <= 0 ? arr.push(0, 1) : limit1 === 1 ? arr.push(1) : ''

    while (a + b <= limit2) {
        let c = a + b
        c >= limit1 && c <= limit2 ? arr.push(c) : ''
        a = b
        b = c
    }

    return arr.join(', ')
}

console.log(generate_fabonacci_upto_N(10, 100))