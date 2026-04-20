function Kaprekar_number(num) {

    let sq = num ** 2

    let count = 0
    let temp = num
    while (temp > 0) {
        count++
        temp = Math.floor(temp / 10)
    }

    let firstNumber = Math.floor(sq / 10 ** count)
    let secondNumber = sq % 10 ** count

    return num === firstNumber + secondNumber
        ? 'Kaprekar Number'
        : 'Not a Kaprekar Number'
}

console.log(Kaprekar_number(45))