// Approach 1

// function isfabonacci(num) {

//     if (num < 0) return false
//     if (num <= 1) return true

//     let a = 0
//     let b = 1

//     while (a + b <= num) {
//         let c = a + b
//         if (c === num) return true
//         a = b
//         b = c
//     }

//     return false
// }

// console.log(isfabonacci(21))



// Approach 2

// It is much optimised than others, but it only work till Max_Safe_Integer

function isfabonacci(num) {
   return (Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) || Number.isInteger(Math.sqrt(5 * num ** 2 - 4)))
}

console.log(isfabonacci(21))