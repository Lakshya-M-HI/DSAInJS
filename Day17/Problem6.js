function sum_Of_digits(num) {
    if (num <= 0) return num
    return (num % 10) + sum_Of_digits(Math.floor(num / 10))
}

console.log(sum_Of_digits(1234))