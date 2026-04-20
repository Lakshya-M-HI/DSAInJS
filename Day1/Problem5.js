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

// It is not optimal because takes more than 3-5 sec even for 100000 

function factorial(num) {
    let sum = 1n
    for (let i = 1n; i <= num; i++) {
        sum *= i
    }
    console.log(sum)
}
// factorial(10n)


// Approach 2

// It is also not optimal because takes same time for same input

// function factorial(num) {
//     let arr = []
//     for (let i = 1n; i <= num; i++) {
//         arr.push(i)
//     }
//     console.log(arr)

//     let result = arr.reduce((a, b) => BigInt(a) * BigInt(b))

//     console.log(result)
// }
// factorial(10000n)

console.timeEnd()