const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Diamond_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Diamond_Pattern(Rows) {
    for (let i = 0; i < (2 * Rows - 1); i++) {
        let star = ''

        for (let j = 1; j <= (2 * Rows - 1); j++) {
            if (i < (2 * Rows - 1) / 2 && j <= 2 * i + 1) {
                star += '*'
            } else if (i > (2 * Rows - 1) / 2 && j <= 2 * ((2 * Rows - 1) - i) - 1) {
                star += '*'
            }

            if (i < (2 * Rows - 1) / 2 && j <= ((2 * Rows - 1) - (2 * i + 1)) / 2) {
                star = ' ' + star
            } else if (i > (2 * Rows - 1) / 2 && j <= ((2 * Rows - 1) - (2 * ((2 * Rows - 1) - i) - 1)) / 2) {
                star = ' ' + star
            }
        }

        console.log(star)
    }
}
Diamond_Pattern(3)




// Approach 2

// function Diamond_Pattern(Rows) {
//     for (let i = 0; i < Rows; i++) {
//         let star = ''

//         for (let j = 1; j <= Rows; j++) {
//             if (i < Rows / 2 && j <= 2 * i + 1) {
//                 star += '*'
//             } else if (i > Rows / 2 && j <= 2 * (Rows - i) - 1) {
//                 star += '*'
//             }

//             if (i < Rows / 2 && j <= (Rows - (2 * i + 1)) / 2) {
//                 star = ' ' + star
//             } else if (i > Rows / 2 && j <= (Rows - (2 * (Rows - i) - 1)) / 2) {
//                 star = ' ' + star
//             }
//         }

//         console.log(star)
//     }
// }
// Diamond_Pattern(3)




console.timeEnd()