
const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Sum_of_N_numbers(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()

// Approach1

function Max_of_Three(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

Max_of_Three(15, 5, 15)




// Apprach 2

// it is optimal solution

// function Max(...args) {
//     let maxNumber
//     args.reduce((a, b) => {
//         maxNumber = a > b ? a : b
//         return maxNumber
//     })
//     console.log(maxNumber)
// }
// Max(1, 2, 3, 1, 6, 0, 7, 8, 9, 3, 9, 19, 10, 17, 16, 10, 29, 28, 40, 0, 10, 29, 39, 36, 37)


console.timeEnd()