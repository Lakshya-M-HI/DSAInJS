// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value && value < 100000)
        return factorial(parseInt(input.value.trim()))

    alert('Number is too big')
})

console.time()

// Approach1

// It is not optimal because takes more than 5-9 sec

// function factorial(num) {
//     let sum = 0n
//     for (let i = 1n; i <= num; i++) {
//         if (i % 2n === 0n && i !== 0n) {
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// factorial(10000000n)


// Approach1

// It is vary optimal solution, because it takes O(1) constant time for n input - usually 0.1 ms

function factorial(num) {
    let n = num / 2n
    let sum = n * (n + 1n)

    console.log(sum)
}
factorial(100000000000000000000000000000000000000000000000000000000000000000000000000000000000n)


console.timeEnd()