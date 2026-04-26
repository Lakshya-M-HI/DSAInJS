let count = 0

function zeroes_in_Number(num) {
    if (num <= 0) return num
    if (num % 10 === 0) count++
    zeroes_in_Number(Math.floor(num / 10))
    return count
}

console.log(zeroes_in_Number(102030))