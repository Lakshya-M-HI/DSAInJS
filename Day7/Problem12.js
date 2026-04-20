// Approach 1 - Produnction Level

function swap(a, b) {
    return [a, b] = [b, a]
}

console.log(swap(5, 6))



// Approach 2 - by using XOR, to prevent overflow for large numbers

// function swap(a, b) {
//     a = a ^ b
//     b = a ^ b
//     a = a ^ b

//     return { a, b }
// }

// console.log(swap(5, 6))



// Approach 3

// function swap(a, b) {
//     a = a + b
//     b = a - b
//     a = a - b

//     return { a, b }
// }

// console.log(swap(5, 6))