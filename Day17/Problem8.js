
function product_Of_digits(num) {
    if (num <= 0) return 1
    return (num % 10) * product_Of_digits(Math.floor(num / 10))
}

console.log(product_Of_digits(1234))