const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return LCM(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()



// Approach1

// It is optimal solution

function sum_of_Total_factors(num) {

    if (!Number(num)) return
    let sum = 0

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i
            num / i !== i ? sum += num / i : ''
        }
    }
    console.log('Sum of total no. of factors: ', sum)
}
sum_of_Total_factors(12)



// Approach2

// function LCM(num) {

//     if (!Number(num)) return
//     let count = 0

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count += i
//         }
//     }

//     console.log('Total number of factors:', count)
// }
// LCM(12)


console.timeEnd()