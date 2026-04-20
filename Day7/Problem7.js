// Approach 1

function addition(num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

function isPrime(num) {
    let factorsCount = 0
    for (let i = 0; i * i <= num; i++) {
        if (num % i === 0) {
            factorsCount++
            if (i !== num / i) factorsCount++
        }
    }

    return factorsCount === 2
}

function Smith_Number(num) {

    if (isPrime(num)) return 'Not a smith number'

    if (num <= 1) return num
    let original = num
    let sum = 0

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {

            let digitSum = addition(i)
            while (num % i === 0) {
                sum += digitSum
                num /= i
            }
        }
    }
    if (num > 1) sum += addition(num)
    return sum === addition(original)
        ? 'Smith Number'
        : 'Not a smith number'
}

console.log(Smith_Number(666))