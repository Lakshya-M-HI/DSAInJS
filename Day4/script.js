const digitsList1 = [2, 4, 6, 5]
const digitsList2 = [7, 3, 2]

// const num1 = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000
// const num2 = 7 * 1 + 3 * 10 + 2 * 100

// console.log(num1)
// console.log(num2)


// function digits(numArr) {
//     let newDigit = 0
//     for (let i = 0; i < numArr.length; i++) {
//         newDigit += numArr[i] * (10 ** i)
//     }
//     console.log(newDigit)
// }


function digits(numArr) {
    let newDigit = 0
    numArr.forEach((num, index) => {
        newDigit += num * 10 ** index
    })
    console.log(newDigit)
}

digits(digitsList1)
digits(digitsList2)