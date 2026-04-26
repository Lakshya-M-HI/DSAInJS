
function reverse_Number(num) {
    if (num <= 0) return num
    const n = (num % 10) * 10 ** (num.toString().length - 1)
    return n + reverse_Number(Math.floor(num / 10))
}

console.log(reverse_Number(1234))