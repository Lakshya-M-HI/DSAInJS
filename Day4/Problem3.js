const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// // Approach1

// function Remove_decimal(num) {

//     while (num % 10 !== 0) {
//         num = num * 10
//         if (num % 10 === 0) {
//             num = num / 10
//             break;
//         }
//     }
//     console.log(num)

// }
// Remove_decimal(12.34)


// Approach2

function Remove_decimal(num) {

    while (!Number.isInteger(num)) {
        num = num * 10
    }
    console.log(num)

}
Remove_decimal(1234)

console.timeEnd()