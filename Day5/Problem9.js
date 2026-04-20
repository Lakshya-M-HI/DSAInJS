const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return LCM(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()

let loopcount = 0

// Approach 1
let cache = {}
function gcd_lcm_of_twoDgits(a, b) {

    if (cache[`hcf_of_${a}${b}`])
        return { hcf: cache[`hcf_of_${a}${b}`], lcm: cache[`lcm_of_${a}${b}`] }

    let larger = Math.max(a, b)
    let smaller = Math.min(a, b)

    while (larger % smaller !== 0) {
        loopcount++
        let rem = larger % smaller
        larger = smaller
        smaller = rem
    }

    cache[`hcf_of_${a}${b}`] = smaller
    cache[`lcm_of_${a}${b}`] = a * b / smaller

    return { hcf: cache[`hcf_of_${a}${b}`], lcm: cache[`lcm_of_${a}${b}`] }
}

function gcd_lcm_of_threeDgits(a, b, c) {

    let hcf = gcd_lcm_of_twoDgits(gcd_lcm_of_twoDgits(a, b).hcf, c).hcf

    let lcm = gcd_lcm_of_twoDgits(gcd_lcm_of_twoDgits(a, b).lcm, c).lcm

    console.log('HCF:', hcf, 'LCM:', lcm)
}

gcd_lcm_of_threeDgits(13, 103, 44)
console.log(loopcount)

// Approach 2

// function LCM(num1, num2, num3) {

//     if (!Number(num1) && !Number(num2) && !Number(num3)) return
//     let loopcount = 0
//     let LCM
//     let larger = Math.max(num1, num2, num3)

//     for (let i = Math.max(num1, num2, num3); i <= num1 * num2 * num3; i += larger) {
//         loopcount++
//         if (i % num1 === 0 && i % num2 === 0 && i % num3 === 0) {
//             LCM = i
//             break
//         }
//     }

//     let smaller1 = Math.min(num1, num2, num3)
//     let smaller2 = Math.min(num1, num2, num3)
//     let secondNum = smaller1 === num1 ? num2 : smaller1 === num2 ? num1 : num2
//     let thirdNum = (num1 + num2 + num3) - (smaller1 + secondNum)
//     let remainder1
//     let remainder2
//     let HCF

//     while (secondNum % smaller1 !== 0 || thirdNum % smaller2 !== 0) {
//         loopcount++
//         if (secondNum % smaller1 !== 0) {
//             remainder1 = secondNum % smaller1
//             secondNum = smaller1
//             smaller1 = remainder1
//         }
//         // console.log(smaller1, smaller2, remainder2, thirdNum)

//         if (thirdNum % smaller2 !== 0) {
//             remainder2 = thirdNum % smaller2
//             thirdNum = smaller2
//             smaller2 = remainder2
//         }
//     }


//     !remainder1 && !remainder2 ? HCF = smaller1 : !remainder1 ? remainder1 = smaller1 : !remainder2 ? remainder2 = smaller2 : ''

//     let largerRemainder = Math.max(remainder1, remainder2)
//     let smallerRemainder = Math.min(remainder1, remainder2)

//     largerRemainder % smallerRemainder === 0 ? HCF = smallerRemainder : ''

//     while (!HCF && largerRemainder % smallerRemainder !== 0) {
//         loopcount++
//         let rem = largerRemainder % smallerRemainder
//         largerRemainder = smallerRemainder
//         smallerRemainder = rem
//         HCF = rem
//         break
//     }

//     // console.log(smaller1, smaller2)

//     console.log('HCF:', HCF, 'LCM: ', LCM)

//     console.log(loopcount)
// }
// LCM(13, 103, 44)



// Approach 3

// function LCM(num1, num2, num3) {

//     if (!Number(num1) && !Number(num2) && !Number(num3)) return
//     let HCF
//     let LCM
//     let loopcount = 0

//     for (let i = 1; i <= num1 * num2 * num3; i++) {
//         loopcount++
//         if (num1 % i === 0 && num2 % i === 0 && num3 % i === 0) {
//             HCF = i
//         }
//         if (i % num1 === 0 && i % num2 === 0 && i % num3 === 0) {
//             LCM = i
//             break;
//         }
//     }
//     console.log('HCF:', HCF, 'LCM:', LCM)
//     console.log(loopcount)
// }
// LCM(13, 103, 44)


console.timeEnd()