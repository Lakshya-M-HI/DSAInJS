function fabonacci_series(num) {
    let a = 0, b = 1;
    let arr = []
    arr.push(0, 1)
    for (let i = 1; i <= num; i++) {
        let c = a + b
        a = b
        b = c
        arr.push(c)
    }
    return arr


}
console.log(fabonacci_series(10))