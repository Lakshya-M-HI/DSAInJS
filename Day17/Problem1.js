let num = 0

function recursion() {
    num++
    if(num >= 10) return num
    recursion()

    return num
}

console.log(recursion())


// // function printNumbers(num) {

// //     if (num > 1) printNumbers(num - 1)
// //     console.log(num)
// // }
// // printNumbers(5)

// function print1toN(N) {
//     if (N > 1) print1toN(N - 1)
//     console.log(N)
// }

// print1toN(5)