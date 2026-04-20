const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return HCF(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

// It is very optimised solution - done by using Elucidian formula

function HCF(num1, num2) {

    if (!Number(num1) && !Number(num1)) return
    let a = 0
    let smaller = Math.min(num1, num2)
    let larger = Math.max(num1, num2)

    while (larger % smaller !== 0) {
        a++
        let remainder = larger % smaller
        larger = smaller
        smaller = remainder
    }

    console.log(smaller)
    console.log(a)
}
HCF(10, 1000)


// // Approach2

// function HCF(num1, num2) {

//     if (!Number(num1) && !Number(num1)) return
//     let num = Math.min(num1, num2)
//     let arr = [1, num]
//     let count = 0
//     let a = 0

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         a++
//         if (num % i === 0) {
//             count++
//             arr.splice(count, 0, i)
//             num / i !== i ? arr.splice(count + 1, 0, num / i) : ''
//         }
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         a++
//         if (num1 % arr[i] === 0 && num2 % arr[i] === 0) {
//             console.log('HCF:', arr[i])
//             break;
//         }
//     }
//     console.log(a)
// }
// HCF(12, 18)


// Approach2

// function HCF(num1, num2) {

//     if (!Number(num1) && !Number(num1)) return
//     let num
//     const smaller = Math.min(num1, num2)

//     for (let i = 1; i <= smaller; i++) {
//         if (num1 % i === 0 && num2 % i === 0) num = i
//     }
//     console.log(num)
// }
// HCF(12, 18)


console.timeEnd()