function fabonacci_series_upto_Limit(num) {

    if (num === 0) return num

    let a = 0
    let b = 1

    let arr = [0, 1]
    while (a + b <= num) {
        let c = a + b
        arr.push(c)
        a = b
        b = c
    }
    return arr.join(', ')
}

console.log(fabonacci_series_upto_Limit(100))