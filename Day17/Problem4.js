
// function sum_Of_first_Natural_numbers(N) {
//     if (N > 1) N += sum_Of_first_Natural_numbers(N - 1)

//     return N
// }

// console.log(sum_Of_first_Natural_numbers(4))

function sum(num) {
    if (num <= 1) return 1
    return num + sum(num - 1)
}

console.log(sum(5))