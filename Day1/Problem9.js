// Brute force - try many times - not optimal

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value)
        return Sum_of_ODD_Numbers(parseInt(input.value.trim()))

    alert('Please enter a valid number!')
})

console.time()

// Approach1

// It is not optimal because takes more than 5-9 sec

// function Sum_of_ODD_Numbers(num) {
//     let sum = 0n
//     for (let i = 1n; i <= num; i++) {
//         if (i % 2n !== 0n) {
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// Sum_of_ODD_Numbers(100n)



// Approach 2

// It is very optimal solution because it take about 0.1ms

// function Sum_of_ODD_Numbers(num) {

//     let oddNo = num / 2n
//     if (num % 2n !== 0n) oddNo = (num + 1n) / 2n

//     let sum = oddNo ** 2n
//     console.log(sum)
// }
// Sum_of_ODD_Numbers(10000000000000000000n)



// Approach 2 - same approach with direct formula

// It is also optimal solution because it takes about 0.1ms

// function Sum_of_ODD_Numbers(num) {
//     let sum
//     if (num % 2n === 0n) {
//         sum = (num / 2n) ** 2n;
//         console.log(sum)
//         return
//     }
//     sum = ((num + 1n) / 2n) ** 2n
//     console.log(sum)
// }
// Sum_of_ODD_Numbers(101n)



// Approach 3 - the formula n**2 is derived from the below A.P

// It is also optimal solution because it also takes about 0.1ms

function Sum_of_ODD_Numbers(num) {

    let oddNo = num / 2n
    
    if (num % 2n !== 0n) oddNo = (num + 1n) / 2n

    let sum = ((2n * 1n) + ((oddNo - 1n) * 2n)) * oddNo / 2n
    console.log(sum)
}
Sum_of_ODD_Numbers(101n)


console.timeEnd()