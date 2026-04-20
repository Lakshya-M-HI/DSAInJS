
// Approach 1

let loop = 0
function Distinct_primefactors(num) {
    let product = 1
    for (let i = 2; i * i <= num; i++) {
        loop++
        if (num % i === 0) {
            product *= i

            while (num % i === 0) {
                loop++
                num /= i
            }
        }
    }

    if (num > 1) product *= num
    return product
}
console.log(Distinct_primefactors(300))
console.log(loop)


// Approach 2
// It is slighlty less optimised

// let loop1 = 0
// function Distinct_primefactors1(num) {
//     let product = 1
//     for (let i = 2; i * i <= num; i++) {
//         loop1++
//         if (num % i === 0) {
//             num /= i
//             product *= i
//             if (num % i === 0) i--
//         }
//     }
//     return product
// }
// console.log(Distinct_primefactors1(300))
// console.log(loop1)