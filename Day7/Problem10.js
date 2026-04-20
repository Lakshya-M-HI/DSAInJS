console.time()

function addition(num) {
    let sum = 0
    let temp = num
    while (temp > 0) {
        sum += (temp % 10) ** 2
        temp = Math.floor(temp / 10)
    }
    return sum
}

let loop = 0

function Happy_number(num) {

    let slow = num
    let fast = num

    do {
        slow = addition(slow)
        fast = addition(addition(fast))
        loop++
    } while (slow !== fast)

    return slow === 1 ? 'Happy Number' : 'Not a Happy Number'
}

console.log(Happy_number(19))
console.log(loop)

console.timeEnd()