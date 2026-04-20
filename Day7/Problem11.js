// Approach 1 - Any Base to Any Base

// From base 2 to 10


// Approach 1

// function Base_2_to_10(num) {
//     let count = 0
//     let sum = 0
//     while (num > 0) {
//         sum += (num % 10) * 2 ** count
//         num = Math.floor(num / 10)
//         count++
//     }
//     return sum
// }

// console.log(Base_2_to_10(101101))


// Approach 2

function Base_2_to_10(num) {
    let count = 0
    let sum = 0

    while (num > 0) {
        sum += num % 10 ? 2 ** count : 0
        num = Math.floor(num / 10)
        count++
    }

    return sum
}

console.log(Base_2_to_10(1101))