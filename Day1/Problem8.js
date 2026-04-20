// Brute force - try many times - not optimal

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value)
        return DivisibleBy_3and_5(parseInt(input.value.trim()))

    alert('Please enetr a valid number!')
})

console.time()

// Approach1

// Both have same time complexity O(n)

// function DivisibleBy_3and_5(num) {
//     for (let i = 1n; i <= num; i++) {
//         if (i % 3n === 0n && i % 5n === 0n) {
//             console.log(i)
//         }
//     }
// }
// DivisibleBy_3and_5(1000000n)


// It is 15X faster than above because it iterates for num/15
// time complexity is same for both

function DivisibleBy_3and_5(num) {
    for (let i = 15n; i <= num; i += 15n) {
        console.log(i)
    }
}
DivisibleBy_3and_5(100n)


console.timeEnd()