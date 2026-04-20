// Approach 1

function square_free_numbers(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            let count = 0

            while (num % i === 0) {
                num /= i
                count ++
            }

            if (count > 1) return 'Not a square-free number'
        }
    }
    return 'Square-Free Number'
}

console.log(square_free_numbers(30))
// 1 2 3 5 6 7 10 11 13 14 15 17 19 21 22 23 26 29 30.


// Approach 2

// function square_free_numbers(num) {
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             num /= i

//             if (num % i === 0) return 'Not a square-free number'
//         }
//     }
//     return 'Square-Free Number'
// }

// console.log(square_free_numbers(30))
// 1 2 3 5 6 7 10 11 13 14 15 17 19 21 22 23 26 29 30.