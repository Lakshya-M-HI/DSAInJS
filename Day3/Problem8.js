const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Inverted_Pyramid_star_Triangle(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Inverted_Pyramid_star_Triangle(Rows) {
    for (let i = Rows - 1; i >= 0; i--) {
        let star = ''

        for (let j = 1; j < (2 * i + 1) + (Rows - i); j++) {
            if ((j === (2 * i + 1) + (Rows - i) - 1) || (j === Rows - i)) {
                star += '*'
            } else if (i !== Rows - 1) {
                star = star + ' '
            } else {
                star += '*'
            }
        }
        console.log(star)
    }
}
Inverted_Pyramid_star_Triangle(5)




console.timeEnd()