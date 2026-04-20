const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Pyramid_star_Triangle(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

//  it is not much optimal because run 3 nested loops

// function Pyramid_star_Triangle(Rows) {
//     for (let i = 0; i < Rows; i++) {
//         let star = ''
//         for (let j = 1; j <= 2 * i + 1; j++) {
//             star += '*'
//         }
//         for (let k = Rows - i; k > 0; k--) {
//             star = ' ' + star
//         }
//         console.log(star)
//     }
// }
// Pyramid_star_Triangle(5)



// Approach 2

//  it is little optimal because run only 2 nested loops


function Pyramid_star_Triangle(Rows) {
    for (let i = 0; i < Rows; i++) {
        let star = ''

        for (let j = 1; j < (2 * i + 1) + (Rows - i); j++) {
            if (j <= 2 * i + 1) {
                star += '*'
            } else {
                star = ' ' + star
            }
        }
        console.log(star)
    }
}
Pyramid_star_Triangle(5)



console.timeEnd()