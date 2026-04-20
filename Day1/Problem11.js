// Brute force - try many times - not optimal

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value)
        return cube(parseInt(input.value.trim()))

    alert('Please enter a valid number!')
})

console.time()


// Apprach 1 

// It is not optimal because it takes 4-5 secs even for 10crore 
// The Time complexity is - O(n)

// function cube(num) {
//     for (let i = 2n; i <= num; i += 2n) {
//         if (i ** 2n <= num) {
//             console.log(i**2n)
//         }
//     }
// }
// cube(10000000n)

// same aaprach with different conditions

// function cube(num) {
//     for (let i = 1n; i <= num; i++) {
//         if (i % 2n === 0n && i ** 2n <= num) {
//             console.log(i ** 2n)
//         }
//     }
// }
// cube(100n)


// Apprach 2

// It is little optimal because traversal only goes to certain squares which are lesser or equal to the given number

// it takes about 4575 ms for 100000000000n (10000 crore)

// The Time Complexity is - O(√n)

function cube(num) {
    for (let i = 2n; i * i <= num; i += 2n) {
        console.log(i ** 2n)
    }
}
cube(100000000000n) // 4575ms



console.timeEnd()