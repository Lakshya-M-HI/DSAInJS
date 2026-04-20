// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Sum_of_N_numbers(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()
// Approach1


// It is not optimal because takes 5-9 sec

// function Sum_of_N_numbers(num) {
//     let sum = 0n
//     for (let i = 1n; i <= num; i++) {
//         sum += i
//     }
//     console.log(sum)
// }
// Sum_of_N_numbers(1000000000n)


// Approach 2

// Optimised solution, takes 0.1 ms

function Sum_of_N_numbers(num) {
    let sum = num * (num + 1n) / 2n
    console.log(sum)
}
Sum_of_N_numbers(1000000000000000000000000000000n)



console.timeEnd()