const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Total_factors(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

// It is optimal solution

function Total_factors(num) {

    if (!Number(num)) return
    if (!Number(num)) return
    let arr = []
    let count = 0

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            arr.splice(count, 0, i)
            num / i !== i ? arr.splice(count + 1, 0, num / i) : ''
            count++
        }
    }
    console.log('Total no. of factors: ', arr.length)
}
Total_factors(24)



// Approach2

// function Total_factors(num) {

//     if (!Number(num)) return
//     let count = 0

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++
//         }
//     }
//     console.log('Total number of factors:',count)
// }
// Total_factors(24)


console.timeEnd()