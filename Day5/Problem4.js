const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return LCM(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

// It is very optimal solution because it is implemented by formula - a*b = HCF*LCM

function LCM(num1, num2) {

    if (!Number(num1) && !Number(num1)) return
    let loopcount = 0
    let smaller = Math.min(num1, num2)
    let larger = Math.max(num1, num2)

    while (larger % smaller !== 0) {
        loopcount++
        let remainder = larger % smaller
        larger = smaller
        smaller = remainder
    }

    let LCM = num1 * num2 / smaller

    console.log('LCM:', LCM)
    console.log('loopcount:', loopcount)
}
LCM(13, 103)



// Approach2

// function LCM(num1, num2) {

//     if (!Number(num1) && !Number(num1)) return
//     const larger = Math.max(num1, num2)
//     let loopcount = 0

//     for (let i = Math.max(num1, num2); i <= num1 * num2; i += larger) {
//         loopcount++
//         if (i % num1 === 0 && i % num2 === 0) {
//             console.log(i, loopcount)
//             return i
//         }
//     }
// }
// LCM(13, 31)


// Approach3

// function LCM(num1, num2) {
//     let loopcount = 0
//     if (!Number(num1) && !Number(num1)) return
//     let num
//     const smaller = Math.min(num1, num2)

//     for (let i = smaller; i <= num1 * num2; i++) {
//         loopcount++
//         if (i % num1 === 0 && i % num2 === 0) {
//             num = i
//             break;
//         }
//     }
//     console.log(num, loopcount)
// }
// LCM(12, 18)


console.timeEnd()